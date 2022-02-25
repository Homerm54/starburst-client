import { Input, Button } from "components/ui";
import { useFormik } from "formik";
import Console from "lib/Console";
import { sleep } from "lib/sleep";
import { useEffect, useState } from "react";
import validator from 'validator';

type FormValues = {
  email?: string;
  password?: string;
  password2?: string;
  secret?: string;
}

const SignUpForm = (): JSX.Element => {
  const [submitting, setSubmitting] = useState(false);
  const formik = useFormik({
    initialValues: { email: '', password: '', password2: '', secret: '' },
    onSubmit,
    validate,
  });

  async function onSubmit(values: FormValues) {
    Console.log('About to sign un with the following values:', values);
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

    if (!values.password2 || (values.password !== values.password2)) {
      error.password2 = 'Your passwords must match, check again';
    }

    if (!values.secret) {
      error.secret = 'You must enter the secret code in order to sign in, sorry';
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
          placeholder="Email"
          helperText="Enter here the email related to your starburst account"
          name="email"
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

      <div className="my-4">
        <Input.Password
          fullWidth
          name="password2"
          placeholder="Password (again)"
          helperText="Confirm your password"
          onChange={formik.handleChange}
          value={formik.values.password2}
          error={Boolean(formik.touched.password2 && formik.errors.password2)}
          errorText={(formik.touched.password2 && formik.errors.password2) || ''}
        />
      </div>

      <div className="my-4">
        <Input
          fullWidth
          name="secret"
          placeholder="SECRET PASSWORD"
          helperText="Enter the secret code, if doubt, contact the administrator"
          onChange={formik.handleChange}
          value={formik.values.secret}
          error={Boolean(formik.touched.secret && formik.errors.secret)}
          errorText={(formik.touched.secret && formik.errors.secret) || ''}
        />
      </div>

      <Button
        block
        size="large"
        htmlType="submit"
        loading={submitting}
      >
        SIGN UP
      </Button>
    </form>
  );
};

export { SignUpForm };
