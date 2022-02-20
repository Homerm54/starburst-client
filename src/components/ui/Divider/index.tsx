import { HorizontalDivider, VerticalDivider, TextDivider, HorizontalDividerText } from "./style";
import { Props } from "./types";

/**
 * Divider component to show a line, either vertical or horizontal,
 * and divide into sections as needed.
 */
const Divider = ({
  text,
  type = 'horizontal',
  textOrientation = 'center'
}: Props): JSX.Element => {

  if (type === 'vertical') return <VerticalDivider />;

  if (text) {
    return (
      <HorizontalDividerText orientation={textOrientation}>
        <TextDivider>{text}</TextDivider>
      </HorizontalDividerText>
    );
  }
  return(
    <HorizontalDivider />
  );
};


export { Divider };
