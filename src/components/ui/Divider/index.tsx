import { HorizontalDivider, VerticalDivider, TextDivider, HorizontalDividerText } from "./style";
import { Props } from "./types";

/**
 * Divider component to show a line, either vertical or horizontal,
 * and divide into sections as needed.
 */
const Divider = ({
  text,
  type = 'horizontal',
  textOrientation = 'center',
  ...rest
}: Props): JSX.Element => {

  if (type === 'vertical') return <VerticalDivider {...rest} />;

  if (text) {
    return (
      <HorizontalDividerText orientation={textOrientation} {...rest}>
        <TextDivider>{text}</TextDivider>
      </HorizontalDividerText>
    );
  }
  return(
    <HorizontalDivider {...rest} />
  );
};


export { Divider };
