import {
  Cpu
} from '../cpu/index';
import {
  eightBitLoadFromGBMemorySkipTraps,
  eightBitStoreIntoGBMemorySkipTraps,
  sixteenBitStoreIntoGBMemorySkipTraps,
  getSaveStateMemoryOffset,
  loadBooleanDirectlyFromWasmMemory,
  storeBooleanDirectlyToWasmMemory
} from '../memory/index';
import {
  setBitOnByte,
  resetBitOnByte,
  checkBitOnByte,
  hexLog
} from '../helpers/index';

export class Interrupts {
  static readonly memoryLocationInterruptEnabled: u16 = 0xFFFF;
  static readonly memoryLocationInterruptRequest: u16 = 0xFF0F; // A.K.A interrupt Flag (IF)

  static masterInterruptSwitch: boolean = false;
  // According to mooneye, interrupts are not handled until AFTER
  // Next instruction
  // https://github.com/Gekkio/mooneye-gb/blob/master/docs/accuracy.markdown
  static masterInterruptSwitchDelay: boolean = false;

  static readonly bitPositionVBlankInterrupt: u8 = 0;
  static readonly bitPositionLcdInterrupt: u8 = 1;
  static readonly bitPositionTimerInterrupt: u8 = 2;
  static readonly bitPositionJoypadInterrupt: u8 = 4;

  // Save States
  static readonly saveStateSlot: u16 = 2;

  // Function to save the state of the class
  static saveState(): void {
    storeBooleanDirectlyToWasmMemory(getSaveStateMemoryOffset(0x00, Interrupts.saveStateSlot), Interrupts.masterInterruptSwitch);
    storeBooleanDirectlyToWasmMemory(getSaveStateMemoryOffset(0x01, Interrupts.saveStateSlot), Interrupts.masterInterruptSwitchDelay);
  }

  // Function to load the save state from memory
  static loadState(): void {
    Interrupts.masterInterruptSwitch = loadBooleanDirectlyFromWasmMemory(getSaveStateMemoryOffset(0x00, Interrupts.saveStateSlot));
    Interrupts.masterInterruptSwitchDelay = loadBooleanDirectlyFromWasmMemory(getSaveStateMemoryOffset(0x01, Interrupts.saveStateSlot));
  }
}

export function checkInterrupts(): i32 {

  if(Interrupts.masterInterruptSwitch) {

    // Boolean to track if interrupts were handled
    // Interrupt handling requires 20 cycles
    // https://github.com/Gekkio/mooneye-gb/blob/master/docs/accuracy.markdown#what-is-the-exact-timing-of-cpu-servicing-an-interrupt
    let wasInterruptHandled: boolean = false;

    let interruptRequest = eightBitLoadFromGBMemorySkipTraps(Interrupts.memoryLocationInterruptRequest);
    let interruptEnabled = eightBitLoadFromGBMemorySkipTraps(Interrupts.memoryLocationInterruptEnabled);

    if(interruptRequest > 0) {

      // Check our interrupts
      if (checkBitOnByte(Interrupts.bitPositionVBlankInterrupt, interruptRequest) &&
        checkBitOnByte(Interrupts.bitPositionVBlankInterrupt, interruptEnabled)) {

        _handleInterrupt(Interrupts.bitPositionVBlankInterrupt);
        wasInterruptHandled = true;
      } else if (checkBitOnByte(Interrupts.bitPositionLcdInterrupt, interruptRequest) &&
        checkBitOnByte(Interrupts.bitPositionLcdInterrupt, interruptEnabled)) {
          _handleInterrupt(Interrupts.bitPositionLcdInterrupt);
          wasInterruptHandled = true;
      } else if (checkBitOnByte(Interrupts.bitPositionTimerInterrupt, interruptRequest) &&
        checkBitOnByte(Interrupts.bitPositionTimerInterrupt, interruptEnabled)) {

          _handleInterrupt(Interrupts.bitPositionTimerInterrupt);
          wasInterruptHandled = true;
      } else if (checkBitOnByte(Interrupts.bitPositionJoypadInterrupt, interruptRequest) &&
        checkBitOnByte(Interrupts.bitPositionJoypadInterrupt, interruptEnabled)) {

          _handleInterrupt(Interrupts.bitPositionJoypadInterrupt);
          wasInterruptHandled = true;
      }
    }

    // Interrupt handling requires 20 cycles, TCAGBD
    if(wasInterruptHandled) {
      let intteruptHandlerCycles: i32 = 20;
      if(Cpu.isHalted) {
        // If the CPU was halted, now is the time to un-halt
        // Should be done here when the jump occurs according to:
        // https://www.reddit.com/r/EmuDev/comments/6fmjch/gb_glitches_in_links_awakening_and_pok%C3%A9mon_gold/
        Cpu.isHalted = false;
        intteruptHandlerCycles += 4;
      }
      return intteruptHandlerCycles;
    }
  }

  return 0;
}

function _handleInterrupt(bitPosition: u8): void {

  // Disable the master switch
  setInterrupts(false);

  // Disable the bit on the interruptRequest
  let interruptRequest = eightBitLoadFromGBMemorySkipTraps(Interrupts.memoryLocationInterruptRequest);
  interruptRequest = resetBitOnByte(bitPosition, interruptRequest);
  eightBitStoreIntoGBMemorySkipTraps(Interrupts.memoryLocationInterruptRequest, interruptRequest);

  // Push the programCounter onto the stacks
  Cpu.stackPointer = Cpu.stackPointer - 2;
  sixteenBitStoreIntoGBMemorySkipTraps(Cpu.stackPointer, Cpu.programCounter);

  // Jump to the correct interrupt location
  // http://www.codeslinger.co.uk/pages/projects/gameboy/interupts.html
  switch(bitPosition) {
    case Interrupts.bitPositionVBlankInterrupt:
      Cpu.programCounter = 0x40;
      break;
    case Interrupts.bitPositionLcdInterrupt:
      Cpu.programCounter = 0x48;
      break;
    case Interrupts.bitPositionTimerInterrupt:
      Cpu.programCounter = 0x50;
      break;
    case Interrupts.bitPositionJoypadInterrupt:
      Cpu.programCounter = 0x60;
      break;
  }
}

function _requestInterrupt(bitPosition: u8): void {

  let interruptRequest = eightBitLoadFromGBMemorySkipTraps(Interrupts.memoryLocationInterruptRequest);

  // Pass to set the correct interrupt bit on interruptRequest
  interruptRequest = setBitOnByte(bitPosition, interruptRequest);

  eightBitStoreIntoGBMemorySkipTraps(Interrupts.memoryLocationInterruptRequest, interruptRequest);
}

export function setInterrupts(value: boolean): void {
  Interrupts.masterInterruptSwitch = value;
}

// Helper function to check if interrupts are enabled
export function areInterruptsEnabled(): boolean {
  return Interrupts.masterInterruptSwitch;
}

// Useful fo determining the HALT bug
export function areInterruptsPending(): boolean {
  let interruptRequest = eightBitLoadFromGBMemorySkipTraps(Interrupts.memoryLocationInterruptRequest);
  let interruptEnabled = eightBitLoadFromGBMemorySkipTraps(Interrupts.memoryLocationInterruptEnabled);

  if((interruptRequest & interruptEnabled) !== 0) {
    return true;
  } else {
    return false;
  }
}

export function requestVBlankInterrupt(): void {
  _requestInterrupt(Interrupts.bitPositionVBlankInterrupt);
}

export function requestLcdInterrupt(): void {
  _requestInterrupt(Interrupts.bitPositionLcdInterrupt);
}

export function requestTimerInterrupt(): void {
  _requestInterrupt(Interrupts.bitPositionTimerInterrupt);
}

export function requestJoypadInterrupt(): void {
  _requestInterrupt(Interrupts.bitPositionJoypadInterrupt);
}