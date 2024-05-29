import React from 'react';
import { Container, Typography, Link, Box, Grid } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#333', color: '#fff', padding: '40px 0', boxShadow: '0 -5px 10px rgba(0, 0, 0, 0.2)' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              Company Name
            </Typography>
            <Typography variant="body2" color="inherit">
              &copy; {new Date().getFullYear()} Company Name. All rights reserved.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              Links
            </Typography>
            <Link href="#" color="inherit" variant="body2" sx={{ display: 'block', margin: '8px 0' }}>
              About Us
            </Link>
            <Link href="#" color="inherit" variant="body2" sx={{ display: 'block', margin: '8px 0' }}>
              Contact
            </Link>
            <Link href="#" color="inherit" variant="body2" sx={{ display: 'block', margin: '8px 0' }}>
              Privacy Policy
            </Link>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              Follow Us
            </Typography>
            <Box sx={{ display: 'flex', gap: '15px' }}>
              <Link href="#" color="inherit">
                <Facebook sx={{ fontSize: 30, '&:hover': { color: '#3b5998' } }} />
              </Link>
              <Link href="#" color="inherit">
                <Twitter sx={{ fontSize: 30, '&:hover': { color: '#1DA1F2' } }} />
              </Link>
              <Link href="#" color="inherit">
                <Instagram sx={{ fontSize: 30, '&:hover': { color: '#C13584' } }} />
              </Link>
              <Link href="#" color="inherit">
                <LinkedIn sx={{ fontSize: 30, '&:hover': { color: '#0077b5' } }} />
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
