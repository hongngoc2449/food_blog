import React, { useState } from 'react';
import {
  Box,
  Button,
  Container,
  Grid,
  Link as MuiLink, 
  TextField,
  Typography,
  InputAdornment,
  IconButton,
  Divider,
} from '@mui/material';
import { Visibility, VisibilityOff, Email, Lock, ArrowForward } from '@mui/icons-material';
import { Google as GoogleIcon, Facebook as FacebookIcon, Apple as AppleIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom'; 
import loginthumbnail from '../../assets/loginthumbnail.svg';

const LoginPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleLogin = () => {
    navigate('/login', { state: { scrollToTop: true } }); 
  };


  return (
    <Container component="main" maxWidth={false} sx={{ px: { xs: 1, md: 2 }, py: { xs: 1, md: 2 } }}>
      <Grid container spacing={20} alignItems="center" justifyContent="center" sx={{ minHeight: '100vh' }}>
        <Grid item xs={12} md={7}>
          <Box
            sx={{
              backgroundImage: `url(${loginthumbnail})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: { xs: '200px', md: '600px' },
              width:'100%', 
              borderRadius: '8px', 
              minHeight: '200px', 
              boxShadow:'10px 10px 15px'
            }}
          />
        </Grid>
        <Grid item xs={12} md={5}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography variant="h5" gutterBottom>
              Become an exclusive member
            </Typography>
            <Typography variant="h6" gutterBottom>
              Sign up and join the membership
            </Typography>
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Email />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              name="password"
              label="Password"
              type={showPassword ? 'text' : 'password'}
              id="password"
              autoComplete="current-password"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              name="password"
              label="Confirm Password"
              type={showPassword ? 'text' : 'password'}
              id="password"
              autoComplete="current-password"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                backgroundColor: '#2c2c6c',
                color: 'white',
                '&:hover': {
                  backgroundColor: '#1f1f4f',
                },
              }}
              endIcon={<ArrowForward />}
            >
              Sign Up
            </Button>
            <Divider sx={{ width: '100%', my: 2 }}>Or Sign Up with</Divider>
            <Button
              fullWidth
              variant="outlined"
              startIcon={<GoogleIcon />}
              sx={{ mb: 1 }}
            >
              Sign Up with Google
            </Button>
            <Button
              fullWidth
              variant="outlined"
              startIcon={<FacebookIcon />}
              sx={{ mb: 1 }}
            >
              Sign up with Facebook
            </Button>
            <Button
              fullWidth
              variant="outlined"
              startIcon={<AppleIcon />}
              sx={{ mb: 1 }}
            >
              Sign up with Apple
            </Button>
            <MuiLink variant="body2" sx={{ mt: 2 }} onClick={handleLogin}>
              Already have an account ?
            </MuiLink>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default LoginPage;