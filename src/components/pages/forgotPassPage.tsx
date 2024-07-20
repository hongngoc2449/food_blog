import React from 'react';
import { Box, TextField, Button, Typography,Grid,Container,Link as MuiLink } from '@mui/material';
import loginthumbnail from '../../assets/loginthumbnail.svg';
import '@fontsource/volkhov';
import { useNavigate } from 'react-router-dom'; 



const ForgetPasswordPage: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login', { state: { scrollToTop: true } }); 
  };
  return (
    <Container component="main" maxWidth={false} sx={{ px: { xs: 1, md: 2 }, py: { xs: 1, md: 2 } }}>
      <Grid container spacing={10} alignItems="center" justifyContent="center" sx={{ minHeight: '100vh' }}>
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
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', bgcolor: 'background.default' }}>
          <Box
            width={500}
            padding={4}
            bgcolor="background.paper"
          >
            <Typography variant="h4"  gutterBottom fontFamily={'Volkhov'}>
              Forget Password
            </Typography>
            <form>
            <Grid container spacing={2} >
              <Grid item xs={12} sm={6} sx={{ mb: 2 }}>
                <TextField
                  id="firstName"
                  name="firstName"
                  label="First Name"
                  variant="standard"
                  fullWidth
                  InputProps={{
                    disableUnderline: true,
                  }}
                  sx={{
                    borderBottom: '1px solid #e0e0e0',
                    paddingBottom: '8px',
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6} sx={{ mb: 2 }}>
                <TextField
                  id="lastName"
                  name="lastName"
                  label="Last Name"
                  variant="standard"
                  fullWidth
                  InputProps={{
                    disableUnderline: true,
                  }}
                  sx={{
                    borderBottom: '1px solid #e0e0e0',
                    paddingBottom: '8px',
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6} sx={{ mb: 2 }}>
                <TextField
                  id="email"
                  name="email"
                  label="Email Address"
                  type="email"
                  variant="standard"
                  fullWidth
                  InputProps={{
                    disableUnderline: true,
                  }}
                  sx={{
                    borderBottom: '1px solid #e0e0e0',
                    paddingBottom: '8px',
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6} sx={{ mb: 2 }}>
                <TextField
                  id="phone"
                  name="phone"
                  label="Phone Number"
                  variant="standard"
                  fullWidth
                  InputProps={{
                    disableUnderline: true,
                  }}
                  sx={{
                    borderBottom: '1px solid #e0e0e0',
                    paddingBottom: '8px',
                  }}
                />
              </Grid>
              <Grid item xs={12} lineHeight={3}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{ mt: 2 }}
                >
                  Send Confirmation Code
                </Button>
                <MuiLink variant="body2" sx={{ mt: 2 }} onClick={handleLogin}>
                  Come back to log in
                </MuiLink>
              </Grid>
            </Grid>
            </form>
          </Box>
        </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ForgetPasswordPage;