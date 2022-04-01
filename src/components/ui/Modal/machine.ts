import { createMachine, MachineConfig } from 'xstate';

type ModalEvents =
  | { type: 'open' }
  | { type: 'close' }

type ModalContext = {
  animationTime: number;
}

interface ModalMachineSchema {
  states: {
    HIDDEN: object;
    ACTIVE: {
      states: {
        OPENING: object;
        OPENED: object;
      };
    };
  };
}

const ModalMachineOptions: MachineConfig<ModalContext, ModalMachineSchema, ModalEvents> = {
  id: 'modal-machine',
  context: {
    animationTime: 2000,
  },
  initial: 'HIDDEN',
  states: {
    ACTIVE: {
      initial: 'OPENING',
      on: {
        close: { target: 'HIDDEN' }
      },
      states: {
        OPENED: {
          on: {
            close: { target: '#modal-machine.HIDDEN' }
          },
        },
        OPENING: {
          after: {
            TIME_TO_INTERACTIVE: { target: 'OPENED' },
          }
        }
      }
    },
    HIDDEN: {
      on: {
        open: { target: 'ACTIVE' },
      }
    }
  }
};


const ModalMachine = createMachine(ModalMachineOptions, {
  delays: {
    TIME_TO_INTERACTIVE: 1500,
  }
});

export { ModalMachine };
