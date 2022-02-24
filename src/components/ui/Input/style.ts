import styled from "styled-components";
import { InputContainerProps, InputSize, LabelProps, ParentContainerProps } from "./types";

const getLabelSize = (size: InputSize) => {
  switch (size) {
  case 'medium':
    return 1;
  case 'large':
    return 0;
  case 'small':
    return 2;
  }
};

const getInputFontSize = (size: InputSize) => {
  switch (size) {
  case 'medium':
    return 0;
  case 'large':
    return 1;
  case 'small':
    return -1;
  }
};

const getTextFontSize = (size: InputSize) => {
  switch (size) {
  case 'small':
    return 3;
  case 'medium':
    return 2;
  case 'large':
    return 0;
  }
};

const getWidth = (size: InputSize) => {
  switch (size) {
  case 'small':
    return '20ch';
  case 'medium':
    return '25ch';
  case 'large':
    return '30ch';
  }
};

const Label = styled.label<LabelProps>`
  font-size: ${({ theme, $size }) => theme.baseFontSize - getLabelSize($size)}px;
  margin: 0 0 ${({ theme }) => theme.spacing(1)}px;
`;

const StyledInput = styled.input`
  font-size: inherit;
  color: ${({ theme }) => theme.palette.text.primary};
  display: inline-block;
  text-align: start;
  cursor: text;
  background-color: transparent;
  margin: 0;
  padding: ${({ theme }) => `${theme.spacing(0.5)}px 0`};
  border-width: 0;
  border-style: none;
  border-color: transparent;
  border-image: none;
  width: 100%;

  cursor: ${({ disabled }) => disabled ? 'inherit' : 'text'};

  ::placeholder {
    color: ${({ theme, disabled }) => (
    disabled
      ? theme.palette.action.disabled
      : `${theme.palette.grey[400]}40` // % of opacity
  )};
  }
`;

const InputContainer = styled.span<InputContainerProps>`
  font-size: ${({ theme, $size }) => theme.baseFontSize + getInputFontSize($size)}px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex: 1 1 auto;
  width: 100%;
  align-items: center;
  color: inherit;

  border-bottom: 2px ${({ $disabled }) => $disabled? 'dotted' : 'solid'} ${({ theme, $isFocused, $isReadOnly, $error, $disabled, $color }) => (
  ($isReadOnly || $disabled)
    ? theme.palette.grey[600]
    : $error
      ? theme.palette.error.main
      : $color === 'basic'
        ? theme.palette.grey[600]
        : $color === 'info'
          ? theme.palette.info.dark
          : $color === 'success'
            ? theme.palette.success.dark
            : $color === 'warning'
              ? theme.palette.warning.dark
              : $isFocused
                ? theme.palette.primary.dark
                : 'inherit'
)};

  :hover, :focus {
    border-bottom-color: ${({ theme, $isReadOnly, $error, $disabled, $color }) => (
    ($isReadOnly || $disabled)
      ? theme.palette.grey[600]
      : $error
        ? theme.palette.error.main
        : $color !== 'basic'
          ? 'unset'
          : theme.palette.primary.dark
  )};
  }
`;

const Prefix = styled.span`

`;

const Sufix = styled.span`
  min-width: 37px;
  margin-right: -${({ theme }) => theme.spacing(2)}px;
`;

const OptionalText = styled.span<{ $size: InputSize }>`
  /* Uncomment this to show ellipsis in text  */
  /* text-overflow: ellipsis;
  width: 100%;
  display: inline-block;
  white-space: nowrap;
  overflow: hidden; */

  font-size: ${({ theme, $size }) => theme.baseFontSize - getTextFontSize($size)}px;
  margin-top: ${({ theme }) => theme.spacing(0.5)}px;
`;

const ParentContainer = styled.div<ParentContainerProps>`
  /* Inline flex to avoid forcing a new line + show label above the input field */
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1 1 auto;

  color: ${({ theme, $color }) => (
    $color === 'basic'
      ? 'inherit'
      : $color === 'info'
        ? theme.palette.info.main
        : $color === 'success'
          ? theme.palette.success.main
          : $color === 'warning'
            ? theme.palette.warning.main
            : 'inherit'
  )};

  width: ${({ $fullWidth, $size }) => $fullWidth ? '100%' : getWidth($size)};

  & > ${Label}, & > ${OptionalText} {
    color: ${({ theme, $error, $disabled }) => (
    $error
      ? theme.palette.error.main
      : $disabled
        ? theme.palette.action.disabled
        : 'inherit'
  )};
  }
`;

const Container = {
  Parent: ParentContainer,
  Input: InputContainer,
};

const Elements = {
  Label,
  Prefix,
  Sufix,
  Input: StyledInput,
  Text: OptionalText,
};

export { Container, Elements };
