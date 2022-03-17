import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import api from "api";
import { Button, Container, Input, Typography } from "components/ui";
import { useFormik } from "formik";
import Console from "lib/Console";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import routes from "router/routes";

type FormValues = {
  password: string;
  password2: string;
}

interface Props {
  code: string;
}

const PasswordScreen = ({ code }: Props): JSX.Element => {
  const [done, setDone] = useState(false);
  const history = useHistory();
  
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

  async function handleSubmit(values: FormValues) {
    Console.log(`Updating password to: ${values.password}`);
    try {
      await api.auth.recoverPassword({ password: values.password, code });
      setDone(true);

      // Auto redirect after 5 seconds
      setTimeout(() => history.push(routes.authentication), 5000);
    } catch (error) {
      console.error(error);
      formik.setSubmitting(false);
    }
  }

  // render section
  if (done) {
    return (
      <Container
        maxWidth="sm"
        style={{
          margin: 'auto',
          height: '100%',
          display: 'flex',
          flexFlow: 'column',
          alignContent: 'center',
          justifyContent: 'center',
          textAlign: 'center',
        }}
      >
        <Typography variant="h2" className="mb-3">
          Password Recovery
        </Typography>

        <FontAwesomeIcon icon="check" className="my-4 text-success" size="5x" />

        <Typography variant="body1" className="mb-3 mx-auto" style={{ maxWidth: 450 }}>
          Your password has been changed, you will be redirected to
          the authentication section soon.
        </Typography>
      </Container>
    );
  }

  return(
    <Container
      maxWidth="sm"
      style={{
        margin: 'auto',
        height: '100%',
        display: 'flex',
        flexFlow: 'column',
        alignContent: 'center',
        justifyContent: 'center',
        textAlign: 'center',
      }}
    >
      <Typography variant="h2" className="mb-3">
        Password Recovery
      </Typography>

      <FontAwesomeIcon icon="key" className="my-4 text-warning" size="5x" />

      <Typography variant="body1" className="mb-3 mx-auto" style={{ maxWidth: 450 }}>
        Enter your new password below to update, then you must re authenticate to
        Sign In.
      </Typography>

      <form onSubmit={formik.handleSubmit} className="my-3">
        <Input.Password
          fullWidth
          disabled={formik.isSubmitting}
          name="password"
          label="Your new password"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.password}
          error={Boolean(formik.touched.password && formik.errors.password)}
          errorText={(formik.touched.password && formik.errors.password) || ''}
        />

        <div className="my-5" />

        <Input.Password
          fullWidth
          disabled={formik.isSubmitting}
          name="password2"
          label="Repeate your password"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.password2}
          error={Boolean(formik.touched.password2 && formik.errors.password2)}
          errorText={(formik.touched.password2 && formik.errors.password2) || ''}
        />

        <Button
          block
          loading={formik.isSubmitting}
          htmlType="submit"
          className="my-4"
          style={{ maxWidth: 250, margin: 'auto' }}
        >
          Update Password
        </Button>
      </form>
    </Container>
  );
};


export default PasswordScreen;
