import { MenuStyle } from "./style";
import { ActionMenuProp } from "./types";

function ActionMenu({
  tools,
  showName,
  fullWidth = false,
  orientation = 'horizontal',
  ...rest
}: ActionMenuProp): JSX.Element {

  return(
    <MenuStyle.Container
      $orientation={orientation === 'horizontal' ? 'row' : 'column'}
      $fullWidth={fullWidth}
      {...rest}
    >
      {
        tools.map((item, ix) => (
          <MenuStyle.Tool key={ix} title={item.name} onClick={item.onClick}>
            <MenuStyle.Icon>
              {item.icon}
            </MenuStyle.Icon>

            {
              showName && <MenuStyle.Text>{item.name}</MenuStyle.Text>
            }
          </MenuStyle.Tool>
        ))
      }
    </MenuStyle.Container>
  );
}


export { ActionMenu };
