import React from "react";
import { Link } from "react-router-dom";
import { Container, Typography, Box, Grid, Stack } from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";

const Footer = () => {
  return (
    <Stack
      alignItems="center"
      spacing={4}
      sx={{
        bgcolor: "#fff",
        color: "#000",
        padding: "40px 0 0 0",
        borderTop: "1px solid #000",
      }}
    >
      <Container sx={{ padding: "2rem" }} maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <h1 className="font-poppins font-bold text-3xl">Stitch</h1>
          </Grid>
          <Grid item xs={12} sm={4}>
            <h1 className="font-bold text-2xl">Links</h1>
            <Grid>
              <Link className="hover:text-gray-600" to="#">
                About{" "}
              </Link>
            </Grid>
            <Grid>
              <Link className="hover:text-gray-600" to="#">
                Contact{" "}
              </Link>
            </Grid>
            <Grid>
              <Link className="hover:text-gray-600" to="#">
                Privacy Policy
              </Link>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={4}>
            <h1 className="font-bold text-2xl">Follow Us</h1>
            <Box sx={{ display: "flex", gap: "15px" }}>
              <Link href="#" color="inherit">
                <Facebook
                  sx={{ fontSize: 30, "&:hover": { color: "#3b5998" } }}
                />
              </Link>
              <Link href="#" color="inherit">
                <Twitter
                  sx={{ fontSize: 30, "&:hover": { color: "#1DA1F2" } }}
                />
              </Link>
              <Link href="#" color="inherit">
                <Instagram
                  sx={{ fontSize: 30, "&:hover": { color: "#C13584" } }}
                />
              </Link>
              <Link href="#" color="inherit">
                <LinkedIn
                  sx={{ fontSize: 30, "&:hover": { color: "#0077b5" } }}
                />
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Typography variant="body2" color="inherit">
        &copy; {new Date().getFullYear()} Stitch. All rights reserved.
      </Typography>
    </Stack>
  );
};

export default Footer;
