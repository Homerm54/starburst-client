import styled from "styled-components";

const CheckBoxContainer = styled.label`
  cursor: pointer;
  /* This with the style of the input will make the whole component a single input */
  position: relative;
  margin: ${({ theme }) => `${theme.spacing(0.5)}px ${theme.spacing(0.75)}px`};
`;

const CheckBoxIcon = styled.span`
  margin-right: ${({ theme }) => theme.spacing(1)}px;
  /* border-radius: 100%;

  :hover {
    background-color: ${({ theme }) => `${theme.palette.common.white}50`};
  } */
`;

const CheckBoxLabel = styled.label`
`;

const Input = styled.input`
  cursor: inherit;
  position: absolute;
  opacity: 0; /* This will make the input invisible, but **will** be there */
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  z-index: 1;
`;

export { CheckBoxContainer, CheckBoxIcon, CheckBoxLabel, Input };
