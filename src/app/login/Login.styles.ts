import { makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) => ({
  wrapper: {
    display: 'flex',
  },
  hero: {
    display: 'none',
    maxHeight: '100vh',
    [theme.breakpoints.up('md')]: {
      display: 'block',
    },
  },
  container: {
    background: '#FFF',
    minHeight: '100vh',
    paddingTop: '40px',
    paddingBottom: 0,
    [theme.breakpoints.up('md')]: {
      paddingLeft: '128px',
    },
  },
  loginWrapper: {
    position: 'relative',
    maxWidth: '496px',
  },
  form: {
    position: 'absolute',
    top: '50%',
    width: '100%',
    transform: 'translateY(30%)',
  },
  title: {
    marginTop: '103px',
    fontSize: '30px',
    marginBottom: '29px',
    [theme.breakpoints.up('md')]: {
      marginTop: '0',
    },
  },
  input: {
    borderRadius: '8px',
    border: '1px solid #E0E2EA',
  },
  inputContainer: {
    '&:not(:last-of-type)': {
      marginBottom: '22px',
    },
    '&:last-of-type': {
      marginBottom: '56px',
    },
  },
  label: {
    fontSize: '14px',
    fontWeight: 600,
    marginBottom: theme.spacing(1),
  },
  button: {
    padding: '11px 16px',
    marginTop: 'auto',
    textTransform: 'none',
    width: '100%',
  },
  buttonLabel: {
    fontSize: '16px',
    fontWeight: 600,
  },
  error: {
    color: theme.palette.error.main,
    position: 'absolute',
    top: '100%',
  },
  forgotPassword: {
    display: 'block',
    marginTop: '16px',
    color: '#9194A5',
    fontSize: '14px',
    fontWeight: 600,
  },
}));
