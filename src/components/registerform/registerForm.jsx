import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { useStyles } from './styles';

const RegisterForm = ({
  onClickSubmit,
  message,
  buttonTitle,
  title,
  handleChange,
  values,
  errors,
  onClick
}) => {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {title}
        </Typography>
        <Box
          component="form"
          onSubmit={onClickSubmit}
          sx={{ mt: 1, width: '100%' }}
          className={classes.form}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={handleChange}
            value={values?.email || ''}
            errors={errors?.email || ''}
          />
          {errors?.email && (
            <Typography component="h6" variant="h6" className={classes.error}>
              * {errors.email}
            </Typography>
          )}
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={handleChange}
            value={values?.password || ''}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className={classes.button}
            sx={{ mt: 3, mb: 2 }}>
            {buttonTitle}
          </Button>
          <Grid container>
            <Grid item className={classes.message}>
              <Link onClick={onClick} variant="body2">
                {message}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default RegisterForm;
