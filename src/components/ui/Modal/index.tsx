import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactDOM from 'react-dom';
import { Button } from 'components/ui';
import { BodyContainer } from "./style";
import { ModalFunctionProps, ModalProps } from './types';
import { Card } from '../Card';
import { useClickOutside } from 'lib/hooks';
import { useMachine } from '@xstate/react';
import { ModalMachine } from './machine';
import { useEffect } from 'react';

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
  destroyOnHide = false,
  allowCloseOutside = true,
}: ModalProps): JSX.Element | null => {
  const [state, send] = useMachine(ModalMachine);
  const ref = useClickOutside<HTMLDivElement>(handleClickOutside);
  const opened = state.matches('ACTIVE');
  
  /** Guard to only allow to close after the opening animation and guard time has passed */
  function delayedClose() {  if (state.matches('ACTIVE.OPENED') && onClose) onClose(); }
  function handleClickOutside() { if (allowCloseOutside) delayedClose(); }

  useEffect(() => { send({ type: display ? 'open' : 'close' }); }, [display]);

  if (!opened && destroyOnHide) return null;

  return (
    <BodyContainer
      ref={ref}
      hidden={!display}
      onClick={(e) => e.preventDefault()}
    >
      <Card
        title={title}
        actionsTop={closable
            &&
            <Button
              onClick={delayedClose}
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
