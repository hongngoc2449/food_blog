import React from 'react';
import { Box, Typography, Link, Grid } from '@mui/material';
import { Twitter, Instagram, Facebook } from '@mui/icons-material';

const Footer: React.FC = () => {
  return (
    <Box component="footer" sx={{ p: 4, mt: 'auto', backgroundColor: '#e0e0e0' }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom>
            Food Blog
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            UX Researcher
          </Typography>
          <Typography variant="body1" gutterBottom>
            Email me at
          </Typography>
          <Link href="mailto:contact@website.com" color="inherit">
            contact@website.com
          </Link>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" gutterBottom>
            Lets Talk!
          </Typography>
          <Typography variant="body1" gutterBottom>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna morbi massa dictum tristique convallis pretium eleifend habitant.
            Libero a arcu purus, elit, volutpat in nunc amet. Fermentum risus vel dolor id scelerisque senectus et, id nunc. Consectetur metus
            tristique ullamcorper semper purus massa eget urna.
          </Typography>
        </Grid>
      </Grid>
      <Box sx={{ display: 'flex', justifyContent: 'center', my: 2 }}>
        <Link href="#" color="inherit" sx={{ mx: 1 }}>
          <Twitter />
        </Link>
        <Link href="#" color="inherit" sx={{ mx: 1 }}>
          <Instagram />
        </Link>
        <Link href="#" color="inherit" sx={{ mx: 1 }}>
          <Facebook />
        </Link>
      </Box>
      <Box sx={{ borderTop: 1, borderColor: 'divider', pt: 2 }}>
        <Grid container justifyContent="space-between">
          <Grid item>
            <Link href="#" color="inherit" sx={{ mx: 2 }}>
              About Me
            </Link>
            <Link href="#" color="inherit" sx={{ mx: 2 }}>
              Additional Link
            </Link>
            <Link href="#" color="inherit" sx={{ mx: 2 }}>
              Additional Link
            </Link>
            <Link href="#" color="inherit" sx={{ mx: 2 }}>
              Contact Me
            </Link>
          </Grid>
          <Grid item>
            <Typography variant="body2" color="textSecondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Footer;