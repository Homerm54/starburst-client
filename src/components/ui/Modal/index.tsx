import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactDOM from 'react-dom';
import { Button } from 'components/ui';
import { Mask, BodyContainer } from "./style";
import Console from 'lib/Console';
import { ModalFunctionProps, ModalProps } from './types';
import { Card } from '../Card';

/** Root component in the HTML where the modals called by method are added */
const ModalID = 'ui-modal';

const Modal = ({
  footer,
  title,
  children,
  onOk,
  onClose,
  onCancel,
  display = false,
  closable = true,
  allowCloseOutside = true,
}: ModalProps): JSX.Element | null => {
  if (!display) return null;

  return (
    <Mask
      id={ModalID}
      onClick={(e) => {
        const target = e.target as HTMLElement;
        if (target.id === ModalID && allowCloseOutside && onClose) onClose();
      }}
    >
      <BodyContainer onClick={(e) => e.preventDefault()}>
        <Card
          title={title}
          actionsTop={closable
            &&
            <Button
              onClick={onClose}
              type="unstyled"
              icon={<FontAwesomeIcon icon="circle-xmark" />}
            />}
          actionsBottom={
            footer !== null
            && (
              footer
                ? footer
                : (
                  [
                    <Button key="cancel" onClick={onCancel}>Cancelar</Button>,
                    <Button key="ok" onClick={onOk}>Ok</Button>
                  ]
                ))
          }
        >
          {children}
        </Card>
      </BodyContainer>
    </Mask>
  );
};



/**
 * TODO: How to pass the theme to this, since using ReactDOM.render breaks the context
 */
const showModal = ({ content }: ModalFunctionProps): void => {
  return;
  const container = document.createElement('div');
  const onClose = () => {
    Console.log('Closing!');
    ReactDOM.unmountComponentAtNode(container);
    container.remove();
  };

  document.body.appendChild(container);

  setTimeout(() => {
    ReactDOM.render(
      <Modal display onClose={onClose}>{content}</Modal>,
      container
    ); 
  });
};

export default Modal;
export { showModal };
