import { Input, Button, message } from "components/ui";
import Console from "lib/Console";
import { useFormik } from 'formik';
import validator from 'validator';
import api from 'api';
import { AuthError } from 'api/auth/client-errors';

type FormValues = {
  email: string;
  password: string;
}

const SigninForm = ({ onFinish }: { onFinish?: () => unknown }): JSX.Element => {
  const formik = useFormik({
    initialValues: { email: '', password: '' },
    onSubmit,
    validate,
  });

  async function onSubmit(values: FormValues) {
    Console.log('About to sign in with the following values:', values);
    try {
      await api.auth.SignIn({ email: values.email, password: values.password });
      Console.log(`Signed in!`);

      if (onFinish) {
        onFinish();
        message.success({ content: 'Successfully signed in' });
      } else {
        formik.setSubmitting(false);
      }
    } catch (error) {
      Console.error(error);
      formik.setSubmitting(false);

      if (error instanceof AuthError) {
        if (
          error.code === 'invalid-credentials'
          || error.code === 'user-not-found'
        ) {
          message.error({
            destroyOnClick: true,
            timeout: 6000,
            content: 'Email or password invalid, check again',
          });
        } else if (error.code === 'unauthorized' || error.code === 'forbidden') {
          message.error({
            destroyOnClick: true,
            timeout: 6000,
            content: 'Sorry, but you are not authorized to perform such request',
          });
        } else {
          message.error({
            destroyOnClick: true,
            timeout: 6000,
            content: 'Something weird happended, please try again',
          });
        }
      } else {
        message.error({
          destroyOnClick: true,
          timeout: 6000,
          content: 'Something happended, check your internet connection and try again',
        });
      }
    }
  }

  function validate(values: FormValues) {
    Console.log('Validating with:', values);
    const error: Partial<FormValues> = {};

    if (!values.email) {
      error.email = 'The email is required to sign in';
    } else if (!validator.isEmail(values.email)) {
      error.email = 'Please enter a valid email address';
    }

    if (!values.password) {
      error.password = 'The password is required to sign in';
    } else if (values.password.length < 6) {
      error.password = 'Your password should be at least 6 characters long';
    }

    return error;
  }

  return(
    <form onSubmit={formik.handleSubmit}>
      <div className="my-4">
        <Input
          fullWidth
          type="email"
          name="email"
          placeholder="Email"
          helperText="Enter here the email related to your starburst account"
          onChange={formik.handleChange}
          value={formik.values.email}
          error={Boolean(formik.touched.email && formik.errors.email)}
          errorText={(formik.touched.email && formik.errors.email) || ''}
        />
      </div>
      
      <div className="my-4">
        <Input.Password
          fullWidth
          name="password"
          placeholder="Password"
          helperText="Enter your password"
          onChange={formik.handleChange}
          value={formik.values.password}
          error={Boolean(formik.touched.password && formik.errors.password)}
          errorText={(formik.touched.password && formik.errors.password) || ''}
        />
      </div>

      <Button
        block
        size="large"
        htmlType="submit"
        loading={formik.isSubmitting}
      >
        SIGN IN
      </Button>
    </form>
  );
};

export { SigninForm };
