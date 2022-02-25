import { Input, Button } from "components/ui";
import Console from "lib/Console";
import { useFormik } from 'formik';
import validator from 'validator';
import { useEffect, useState } from "react";
import { sleep } from "lib/sleep";

type FormValues = {
  email?: string;
  password?: string;
}

const SigninForm = (): JSX.Element => {
  const [submitting, setSubmitting] = useState(false);
  const formik = useFormik({
    initialValues: { email: '', password: '' },
    onSubmit,
    validate,
  });

  // Check https://formik.org/docs/guides/form-submission for this stages
  // formik.isSubmitting
  // formik.submitCount
  // formik.isValidating
  // formik.setSubmitting

  // check render props pattern

  async function onSubmit(values: FormValues) {
    Console.log('About to sign in with the following values:', values);
    // TODO submit here
    await sleep(2000);
    formik.setSubmitting(false);
  }

  function validate(values: FormValues) {
    Console.log('Validating with:', values);
    const error: FormValues = {};

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

  useEffect(() => { setSubmitting(formik.isSubmitting); }, [formik.isSubmitting]);
  
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
        loading={submitting}
      >
        SIGN IN
      </Button>
    </form>
  );
};

export { SigninForm };
