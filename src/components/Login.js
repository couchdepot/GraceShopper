import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import FormGroup from '@material-ui/core/FormGroup';
import Typography from '@material-ui/core/Typography';
import LockOutlined from '@material-ui/icons/LockOutlined';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = ({ target: { value } }) => setEmail(value);
  const handlePasswordChange = ({ target: { value } }) => setPassword(value);

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      style={{ height: '100vh' }}
    >
      <Grid item xs={12} sm={6} lg={4}>
        <Paper style={{ height: '400px' }}>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            style={{ height: '100%' }}
          >
            <LockOutlined fontSize="large" style={{ marginBottom: '10px' }} />
            <Typography variant="h5" gutterBottom>
              Log In
            </Typography>

            <form>
              <FormGroup>
                <TextField
                  label="Email"
                  type="email"
                  value={email}
                  autoComplete="email"
                  margin="normal"
                  onChange={handleEmailChange}
                />
              </FormGroup>

              <FormGroup>
                <TextField
                  label="Password"
                  type="password"
                  value={password}
                  autoComplete="current-password"
                  margin="normal"
                  onChange={handlePasswordChange}
                />
              </FormGroup>
            </form>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Login;
