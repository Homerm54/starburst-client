import { Button, Container, Input, Typography } from "components/ui";
import { useFormik } from "formik";
import Console from "lib/Console";

type FormValues = {
  password: string;
  password2: string;
}

const PasswordScreen = (): JSX.Element => {
  const formik = useFormik<FormValues>({
    initialValues: { password: '', password2: '' },
    onSubmit: handleSubmit,
    validate: validation,
  });

  function validation(values: FormValues) {
    const error: Partial<FormValues> = {};

    if (!values.password) {
      error.password = 'This field is required';
    } else if (values.password.length < 6 || values.password.length > 12) {
      error.password = 'The password must be between 6 and 12 characters long';
    } else if (values.password !== values.password2) {
      error.password2 = 'The passwords must match';
    }

    return error;
  }

  function handleSubmit(values: FormValues) {
    Console.log(`Updating password to: ${values.password}`);
    // TODO: API call
  }

  return(
    <Container maxWidth="sm">
      <Typography variant="h4">Password Recovery</Typography>

      <form onSubmit={formik.handleSubmit}>
        <Input
          fullWidth
          name="password"
          placeholder="New Password"
          onChange={formik.handleChange}
          value={formik.values.password}
          error={Boolean(formik.touched.password && formik.errors.password)}
          errorText={(formik.touched.password && formik.errors.password) || ''}
        />

        <Input
          fullWidth
          name="password2"
          placeholder="Repeate new password"
          onChange={formik.handleChange}
          value={formik.values.password2}
          error={Boolean(formik.touched.password2 && formik.errors.password2)}
          errorText={(formik.touched.password2 && formik.errors.password2) || ''}
        />

        <Button
          block
          htmlType="submit"
          disabled={!formik.values.password}
        >
          Update Password
        </Button>
      </form>
    </Container>
  );
};


export default PasswordScreen;
