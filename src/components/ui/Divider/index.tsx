import { DividerStyled } from "./style";

interface Props {
  /** True if the divider will be used in a vertical way, false to horizontal */
  vertical?: boolean;
}

const Divider = ({ vertical = false }: Props): JSX.Element => {

  return(
    <DividerStyled />
  );
};


export { Divider };
