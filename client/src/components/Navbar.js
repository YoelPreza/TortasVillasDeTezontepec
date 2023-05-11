import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from '@mui/icons-material/Adb';

// const pages = ['Sucursales', 'Contacto', 'Nosotros'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
//   const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
//   const handleOpenUserMenu = (event) => {
//     setAnchorElUser(event.currentTarget);
//   };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };

  return (
    <AppBar  style={{ backgroundColor: 'Orange', zIndex: 2  }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              
              fontFamily: 'inherit',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'white',
              textDecoration: 'none',
            }}
          >
            Villas
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
            style={{ color: 'white' }}
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon />
            </IconButton>
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
              {/* {pages.map((page) => ( */}
                <MenuItem  onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" component="a"  color='black' noWrap href='/Branches' 
                  sx={{textDecoration: 'none',}} > Sucursales </Typography>
                </MenuItem>

                <MenuItem>
                <Typography textAlign="center" component="a" color='black' noWrap href='/Contact' 
                  sx={{textDecoration: 'none',}} > Contacto </Typography>
                </MenuItem>

                <MenuItem>
                <Typography textAlign="center" component="a" color='black' noWrap href='/AboutUs' 
                  sx={{textDecoration: 'none',}} > Nosotros </Typography>
                </MenuItem>
              {/* ))} */}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            style={{ color: 'white' }}
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
            //   color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Villas
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' },  justifyContent: 'flex-end' }}>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black', fontWeight:'600', display: 'block' }}
                href='/Branches'
              >
               Sucursales
              </Button>

              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black',  fontWeight:'600', display: 'block' }}
                href='/Contact'
              >
               Contacto
              </Button>

              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black',  fontWeight:'600' , display: 'block' }}
                href='/AboutUs'
              >
               Nosotros
              </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
