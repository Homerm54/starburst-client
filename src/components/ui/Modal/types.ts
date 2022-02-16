import React from "react";

interface ModalProps {
  /** Content (body) of the modal */
  children: React.ReactNode;

  /** 
   * Whether the modal is visible or not.
   * In case of toggling this flag, the modal body is completely unmounted.
   */
  display?: boolean;

  /** 
   * Whether or not show the close icon on the top left corner, 
   * and exec the onClose function, defaults to true 
   */
  closable?: boolean;

  footer?: React.ReactNode | null | undefined;
  
  /** Whether to close the modal dialog when the area outside the modal is clicked */
  allowCloseOutside?: boolean;

  /** Function to be called when closing a closing button is called */
  onClose?: () => unknown;

  /** Function called when Cancel button in Footer is pressed */
  onCancel?: () => unknown;

  /** Function called when Ok (accept) button in Footer is pressed */
  onOk?: () => unknown;

  /** Title of the Modal */
  title?: React.ReactNode;
}

interface ModalFunctionProps {
  content: React.ReactNode;
}

export type { ModalProps, ModalFunctionProps };
