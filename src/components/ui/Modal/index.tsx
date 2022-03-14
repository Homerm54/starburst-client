import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactDOM from 'react-dom';
import { Button } from 'components/ui';
import { BodyContainer } from "./style";
import { ModalFunctionProps, ModalProps } from './types';
import { Card } from '../Card';
import { useClickOutside } from 'lib/hooks';

/** Root component in the HTML where the modals called by method are added */
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
  const ref = useClickOutside<HTMLDivElement>(handleClickOutside);

  function handleClickOutside() {
    if (display && allowCloseOutside && onClose) onClose();
  }

  if (!display) return null;

  return (
    <BodyContainer onClick={(e) => e.preventDefault()} ref={ref}>
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
  );
};



/**
 * TODO: How to pass the theme to this, since using ReactDOM.render breaks the context
 */
const showModal = ({ content }: ModalFunctionProps): void => {
  return;
  const container = document.createElement('div');
  const onClose = () => {
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
