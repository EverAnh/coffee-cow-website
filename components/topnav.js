import * as React from 'react';
import Image from 'next/image';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginIcon from '@mui/icons-material/Login';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

export default function TopNav() {

  return (
    <AppBar
        position="absolute"
        color="transparent"
        elevation={0}
    >
      <Toolbar sx={{py: 3}} id="back-to-top-anchor">
        <Image
          src="/images/logo_cowface.png"
          alt="Coffee Cow Logo"
          width="62"
          height="32"
          position="relative"
          sx={{ flexShrink: 0 }}
        />
        <Box sx={{ flexGrow: 1 }}>
          <Link
            variant="button"
            href="#products-anchor"
            color="#d6d6d6"
            fontSize="large"
            sx={{ my: 1, ml: 3, mr: 1.5 }}
          >
            Products
          </Link>
          <Link
            variant="button"
            href="#testimonials-anchor"
            color="#d6d6d6"
            fontSize="large"
            sx={{ my: 1, mx: 1.5 }}
          >
            Testimonials
          </Link>
          <Link
            variant="button"
            href="#explainer-anchor"
            color="#d6d6d6"
            fontSize="large"
            sx={{ my: 1, mx: 1.5 }}
          >
            Video
          </Link>
          <Link
            variant="button"
            href="#countdown-anchor"
            color="#d6d6d6"
            fontSize="large"
            sx={{ my: 1, mx: 1.5 }}
          >
            Countdown
          </Link>
        </Box>
        <Stack direction="row" spacing={2} sx={{ alignSelf: 'flex-end' }}>
          <Avatar sx={{ bgcolor: "#222", width: "48px", height: "48px" }}>
            <LoginIcon fontSize="medium" />
          </Avatar>
          <Avatar sx={{ bgcolor: "#222", width: "48px", height: "48px" }}>
            <ShoppingCartIcon fontSize="medium" />
          </Avatar>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}