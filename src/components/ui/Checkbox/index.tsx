/**
 * The custom checkbox is just a hidden checkbox, and on click, alternate between 
 * the square icon, and the check square icon, that's it, no more.
 */

import { CheckBoxProps } from "./types";
import { CheckBoxContainer, CheckBoxIcon, CheckBoxLabel, Input } from './style';
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Console from "lib/Console";

function Checkbox({
  label,
  checked,
  onChange,
  defaultChecked,
  ...rest
}: CheckBoxProps): JSX.Element {
  const [isChecked, setIsChecked] = useState(defaultChecked);
  const trueChecked = onChange ? checked : isChecked;

  return(
    <CheckBoxContainer
      role="checkbox"
      onClick={() => {
        Console.log('Hola');
        setIsChecked(!trueChecked);
        if (onChange) onChange(!checked);
      }}
    >
      <CheckBoxIcon>
        {
          trueChecked
            ? <FontAwesomeIcon icon="check-square" />
            : <FontAwesomeIcon icon={['far', 'square']} />
        }

        <Input
          type="checkbox"
          checked={trueChecked}
          {...rest}
        />
      </CheckBoxIcon>

      { label && <CheckBoxLabel>{label}</CheckBoxLabel> }
    </CheckBoxContainer>
  );
}


export { Checkbox };
