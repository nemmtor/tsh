import React from 'react';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { Button, Container, TextField } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import { useMutation, useQueryClient } from 'react-query';

import { Logo } from 'components/Logo';
import { login, LoginResponse, LoginValues } from 'requests/user';
import loginHeroImage from 'img/login-hero.jpg';

import { useStyles } from './Login.styles';

const validationSchema = yup.object({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required'),
});

// TODO: Rewrite this
export const Login = () => {
  const styles = useStyles();
  const history = useHistory();

  const queryClient = useQueryClient();

  const loginMutation = useMutation<LoginResponse, Error, LoginValues>(login, {
    onSuccess: (data) => {
      localStorage.setItem('authToken', data.access_token);
      queryClient.setQueryData('me', data.user);
      history.push('/');
    },
  });

  const {
    handleSubmit,
    handleChange,
    values,
    touched,
    errors,
  } = useFormik<LoginValues>({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema,
    onSubmit: (values: LoginValues) => {
      loginMutation.reset();
      loginMutation.mutate(values);
    },
  });

  return (
    <div className={styles.wrapper}>
      <img className={styles.hero} src={loginHeroImage} alt="" />
      <Container className={`page ${styles.container}`}>
        <div className={styles.loginWrapper}>
          <Logo />
          <form className={styles.form} onSubmit={handleSubmit}>
            <h1 className={styles.title}>Login</h1>
            {loginMutation.error && (
              <p className={styles.error}>{loginMutation.error.message}</p>
            )}
            <div className={styles.inputContainer}>
              <label className={styles.label} htmlFor="username">
                Username
              </label>
              <TextField
                fullWidth
                variant="outlined"
                id="username"
                name="username"
                InputLabelProps={{
                  shrink: true,
                }}
                InputProps={{
                  className: styles.input,
                }}
                placeholder="Enter username"
                value={values.username}
                onChange={handleChange}
                error={touched.username && !!errors.username}
                helperText={touched.username && errors.username}
              />
            </div>
            <div className={styles.inputContainer}>
              <label className={styles.label}>Password</label>
              <TextField
                fullWidth
                variant="outlined"
                id="password"
                name="password"
                InputLabelProps={{
                  shrink: true,
                }}
                InputProps={{
                  className: styles.input,
                }}
                placeholder="Enter password"
                type="password"
                value={values.password}
                onChange={handleChange}
                error={touched.password && !!errors.password}
                helperText={touched.password && errors.password}
              />
            </div>

            <Button
              classes={{
                root: styles.button,
                label: styles.buttonLabel,
              }}
              data-testid="submitLogin"
              variant="contained"
              color="primary"
              type="submit"
            >
              Log in
            </Button>
            <Link to="#" className={styles.forgotPassword}>
              Forgot password?
            </Link>
          </form>
        </div>
      </Container>
    </div>
  );
};
