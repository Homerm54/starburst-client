import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Console from 'lib/Console';
import ReactDOM from 'react-dom';
import { useThemeOutside } from "../hooks/useThemeOutside";
import { MessageContainer, IconStyle, TextStyle } from './style';
import { MessageComponentProps, MessageProps, Variants } from "./types";

function MessageComponent({
  content,
  type,
  destroy,
  onClick,
  destroyOnClick = false,
  position = "top-center",
  ...rest
}: MessageComponentProps) {
  const theme = useThemeOutside();
  Console.log(destroyOnClick);
  return (
    <MessageContainer
      theme={theme}
      role="alert"
      $showButton={destroyOnClick}
      $position={position}
      onClick={(e) => {
        if (destroyOnClick) destroy();
        if (onClick) onClick(e);
      }}
      {...rest}
    >
      <IconStyle theme={theme}>
        {mapIcon(type)}
      </IconStyle>
      
      <TextStyle theme={theme}>
        {content}
      </TextStyle>
    </MessageContainer>
  );
}

/**
 * Utility function to skip the type declaration, and make the message invocation
 * syntax more intuitive.
 * 
 * @param type The type of message that will be rendered
 * @returns A function to let the developer create messages on screen
 */
function MessageBuilder(type: Variants) {
  /**
   * Create a new message in the UI.
   * 
   * @returns Function to unmount the message in case 
   * that's needed before timeout fires
   */
  return function MessageRenderer ({ timeout = 5000, ...rest }: MessageProps): () => void {
    const container = document.createElement('div');
    container.className = "ui-message";
    let timerID: number | undefined = undefined;

    const destroy = () => {
      // Perfome unmount effects
      ReactDOM.unmountComponentAtNode(container);
      container.remove(); // Remove tag from dom
    };

    if (typeof timeout === 'number') {
      // Casting done to avoid ts complaining about type in return function
      timerID = setTimeout(destroy, timeout) as unknown as number;
    }

    // Always needed to append child before rendering component, async process so ok.
    document.body.appendChild(container);
    ReactDOM.render(<MessageComponent destroy={destroy} type={type} {...rest} />, container);

    // Clean up function
    return () => {
      destroy();
      clearTimeout(timerID);
    };
  };
}

const message = {
  warn: MessageBuilder('warn'),
  success: MessageBuilder('success'),
  error: MessageBuilder('error'),
  info: MessageBuilder('info'),
};

export { message };

// UTILS
function mapIcon(type: Variants) {
  switch (type) {
  case 'error':
    return <FontAwesomeIcon icon="circle-xmark" className='text-danger mr-2' />;
  case 'info':
    return <FontAwesomeIcon icon="info-circle" className='text-info mr-2' />;
  case 'success':
    return <FontAwesomeIcon icon="square-check" className='text-success mr-2' />;
  case 'warn':
    return <FontAwesomeIcon icon="triangle-exclamation" className='text-warning mr-2' />;
  default:
    return null;
  }
}

