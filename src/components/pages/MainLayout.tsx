import React from 'react';
import { Outlet } from 'react-router-dom';
import { Container, CssBaseline, Box } from '@mui/material';
import Header from './Header';
import Footer from './Footer';

const MainLayout: React.FC = () => {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <CssBaseline />
      <Header />
      <Container component="main" sx={{ flex: 1, py: 3 }}>
        <Outlet />
      </Container>
      <Footer />
    </Box>
  );
};

export default MainLayout;