import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactDOM from 'react-dom';
import { Button } from 'components/ui/Button';
import { BaseContainer, BodyContainer, Footer, Header } from "./style";
import Console from 'lib/Console';

/** Root component in the HTML where the modals called by method are added */
const ModalID = 'ui-modal';


type ModalProps = {
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
}

const Modal = ({
  footer,
  children,
  display = false,
  closable = true,
  allowCloseOutside = true,
  onClose,
  onCancel,
  onOk,
}: ModalProps): JSX.Element | null => {
  if (!display) return null;

  return (
    <BaseContainer
      id={ModalID}
      onClick={(e) => {
        const target = e.target as HTMLElement;
        if (target.id === ModalID && allowCloseOutside && onClose) onClose();
      }}
    >
      <BodyContainer onClick={(e) => e.preventDefault()}>
        <Header className={`${closable ? '' : 'mb-3'}`}>
          {closable
            &&
            <Button onClick={onClose}>
              <FontAwesomeIcon icon="circle-xmark" />
            </Button>
          }
        </Header>

        <div className='px-3 py-2'>
          {children}
        </div>

        <Footer className={`${footer === null ? 'mt-3' : ''}`}>
          {
            footer !== null
            && (
              footer
              ? footer
              : (
                <>
                  <Button onClick={onCancel}>Cancelar</Button>
                  <Button onClick={onOk}>Ok</Button>
                </>
              ))
          }
        </Footer>
      </BodyContainer>
    </BaseContainer>
  )
}

type ModalFunctionProps = {
  content: React.ReactNode;
}

/**
 * TODO: How to pass the theme to this, since using ReactDOM.render breaks the context
 */
const showModal = ({ content }: ModalFunctionProps): void => {
  return;
  const container = document.createElement('div');
  const onClose = () => {
    Console.log('Closing!')
    ReactDOM.unmountComponentAtNode(container);
    container.remove()
  };

  document.body.appendChild(container);

  setTimeout(() => {
     ReactDOM.render(
       <Modal display onClose={onClose}>{content}</Modal>,
      container
    ); 
  });
}

export default Modal;
export { showModal }
