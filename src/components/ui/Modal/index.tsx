import ReactDOM from 'react-dom';
import { BaseContainer, BodyContainer } from "./style";

/** Root component in the HTML where the modals called by method are added */
const ModalRootID = 'modal-root';

/**
 * TODOs:
 * - On close callback
 *  - Close X icon
 *  - Click out
 * 
 * - Modal.method(): Mount modals on a special React.render on custom doc element
 *  - Mount, on out unmount component and remove from memory
 *  - Allow multiple calls to show, handle on array?
 */

type ModalProps = {
  /** Content (body) of the modal */
  children: React.ReactNode;

  /** 
   * Whether the modal is visible or not.
   * In case of toggling this flag, the modal body is completely unmounted.
   */
  display?: boolean;
}

const Modal = ({ children, display = false }: ModalProps): JSX.Element | null => {
  if (!display) return null;

  return(
    <BaseContainer>
      <BodyContainer>
        {children}
      </BodyContainer>
    </BaseContainer>
  )
}

const AutoCloseModal = (): JSX.Element => <div>Hola</div>;

const showModal = (): void => {
  ReactDOM.render(<AutoCloseModal />, document.getElementById(ModalRootID))
}

export default Modal;
export { showModal }
