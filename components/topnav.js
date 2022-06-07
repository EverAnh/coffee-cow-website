import * as React from 'react'
import Image from 'next/image'

import AppBar from '@mui/material/AppBar'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import Link from '@mui/material/Link'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import LoginIcon from '@mui/icons-material/Login'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Stack from '@mui/material/Stack'
import Toolbar from '@mui/material/Toolbar'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'

const menuLinks = [
  {
    label: "Products",
    href: "/#products"
  },
  {
    label: "Testimonials",
    href: "/#testimonials"
  },
  {
    label: "Video",
    href: "/#explainer"
  },
  {
    label: "Countdown",
    href: "/#countdown"
  },
  {
    label: "Art",
    href: "/art"
  },
];

export default function TopNav({isFrontPage}) {

  const [state, setState] = React.useState({
    drawerOpen: false
  });

  const toggleDrawer = (open) => (event) => {
    /*
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }*/
    setState({ ...state, drawerOpen: open });
  };

  const drawerItems = () => (
    <Box
      sx={{ width: 240 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {menuLinks.map((e, index) => (
          <ListItem key={e.label} disablePadding>
            <ListItemButton component="a" href={e.href}>
              <ListItemText primary={e.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar
        position="absolute"
        color={isFrontPage ? "transparent" : "primary"}
        elevation={0}
    >
      <Toolbar sx={{alignItems: "center", justifyContent: "center"}}>
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, alignItems: "center" }}>
          <IconButton
            size="large"
            onClick={toggleDrawer(true)}
            color="light"
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor="left"
            open={state.drawerOpen}
            onClose={toggleDrawer(false)}
          >
            {drawerItems()}
          </Drawer>
          <Typography
            color="#d6d6d6"
            variant="h5"
          >
            Coffee Cow
          </Typography>
          {/*
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: 'block', md: 'none' },
            }}
          >
            {menuLinks.map((ml) => (
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">{ml.label}</Typography>
              </MenuItem>
            ))}
          </Menu>
          */}
        </Box>

        <Link href="/#home" sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}>
          <Image
            src="/images/logo_cowface.png"
            alt="Coffee Cow Logo"
            width="62"
            height="32"
          />
        </Link>

        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          {menuLinks.map((ml) => (
            <Link
              variant="button"
              key={ml.label}
              href={ml.href}
              color='#d6d6d6'
              sx={{ my: 0, mx: 1.5, textDecoration: 'none' }}
            >
              {ml.label}
            </Link>
          ))}
        </Box>
        <Box>
          <Stack direction="row" spacing={1} sx={{ alignSelf: 'flex-end', justifyContent: 'center' }}>
            <Tooltip title="This button is fake." arrow>
              <Avatar sx={{ bgcolor: "#222" }}>
                <LoginIcon color="light" />
              </Avatar>
            </Tooltip>
            <Tooltip title="This button is fake." arrow>
              <Avatar sx={{ bgcolor: "#222" }}>
                <ShoppingCartIcon color="light" />
              </Avatar>
            </Tooltip>
          </Stack>
        </Box>
      </Toolbar>
    </AppBar>
  );
}