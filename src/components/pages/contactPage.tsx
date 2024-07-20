import React from 'react';
import {
  Typography,
  Grid,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Paper,
  Box,
  Divider,
  Link
} from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import contactImage from '../../assets/ContactUsImage.svg';

const ContactPage: React.FC = () => {
  return (
    <Box sx={{ mt: 4, width: '100%' }}>
      <Grid container spacing={4}>
        {/* Form Section */}
        <Grid item xs={12} md={5}>
          <Typography variant="h3" gutterBottom>
            Get in <Typography variant="h3" component="span" color="primary">touch</Typography>
          </Typography>
          <Typography variant="body1" color="textSecondary" gutterBottom>
            Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo molestie vel, ornare non id blandit netus.
          </Typography>
          <form noValidate autoComplete="off">
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="Contact name"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Street"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="City"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Postcode"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Contact Phone"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="E-mail"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Let's talk about your idea"
                  variant="outlined"
                  fullWidth
                  multiline
                  rows={4}
                />
              </Grid>
              <Grid item xs={12}>
                <Paper elevation={0} variant="outlined" sx={{ p: 2, textAlign: 'center' }}>
                  <CloudUploadIcon fontSize="large" color="disabled" />
                  <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
                    Upload Additional file
                  </Typography>
                  <Typography variant="caption" color="textSecondary">
                    Attach file. File size of your documents should not exceed 10MB
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox />}
                  label="I want to protect my data by signing an NDA"
                />
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" color="primary" fullWidth>
                  SUBMIT
                </Button>
              </Grid>
            </Grid>
          </form>
          <Divider sx={{ my: 4 }} />
          <Grid container spacing={2} justifyContent="center">
            <Grid item>
              <Box display="flex" alignItems="center">
                <PhoneIcon fontSize="small" />
                <Box ml={1}>
                  <Typography variant="caption">Phone</Typography>
                  <Typography variant="caption" color="textSecondary">111 111 111</Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item>
              <Box display="flex" alignItems="center">
                <EmailIcon fontSize="small" />
                <Box ml={1}>
                  <Typography variant="caption">E-MAIL</Typography>
                  <Typography variant="caption" color="textSecondary">info@company.com</Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item>
              <Box display="flex" alignItems="center">
                <HelpOutlineIcon fontSize="small" />
                <Box ml={1}>
                  <Typography variant="caption">HELPDESK: </Typography>
                  <Link href="https://helpdesk.com" variant="caption" color="primary">
                    https://helpdesk.com
                  </Link>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>
        {/* Image Section */}
        <Grid item xs={12} md={7}>
          <Box
            sx={{
              height: '100%',
              width: '100%',
              backgroundImage: `url(${contactImage})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              borderRadius: 1,
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactPage;