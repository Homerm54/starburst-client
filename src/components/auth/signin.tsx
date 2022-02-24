import { Divider, Input } from "components/ui";
import Console from "lib/Console";
import { useState } from "react";

const SigninForm = (): JSX.Element => {
  const [value, setValue] = useState('');

  Console.log(`Value: ${value}`);

  return(
    <>
      <Input
        // error
        allowClear
        disabled
        size="small"
        type="email"
        label="Email here!"
        placeholder="Email"
        helperText="Enter here the email related to your starburst account"
        errorText="Error! Check your email"
      />
      
      <Divider />

      <Input.Password
        label="Contraseña"
        color="success"
        placeholder="Password"
        helperText="Enter your password"

        value={value}
        onChange={(e) => setValue(e.currentTarget.value)}
      />

      <Divider />

      <Input.Search
        size="large"
        onSearch={Console.log}
        placeholder="Search books..."
        helperText="Enter your password"
      />
      
    </>
  );
};

export { SigninForm };
