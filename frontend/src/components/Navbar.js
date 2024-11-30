import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import Menu from '@mui/material/Menu'; // Import Menu
import { useState } from 'react';

const pages1 = ['الرئيسية', 'من نحن', 'أقسامنا', 'شركائنا', 'اخبار الليزر', 'إتصل بنا']; // Pages
const sections = ['الشاشات', 'الطباعة', 'الهدايا الدعائية','الإعلام والإنتاج','التواصل الإجتماعي','تصميم المواقع','الفن التشكيلي','الخط العربي']; // Sample sections for the dropdown menu

function ResponsiveAppBar() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = useState(null); // State for managing dropdown menu anchor
  const navigate = useNavigate();
  const location = useLocation(); // Get current location

  const toggleDrawer = (open) => () => setDrawerOpen(open);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget); // Open the dropdown menu when clicked
  };

  const handleClose = () => {
    setAnchorEl(null); // Close the dropdown menu when an item is clicked or menu is closed
  };

  const drawerList = () => (
    <Box
      sx={{ width: 250, fontFamily: 'Noto Kufi Arabic' }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
      dir="rtl" // Set direction to RTL for drawer content
    >
      {/* Logo */}
      <Box sx={{ padding: 2, textAlign: 'center' }}>
        <img
          src='https://i.ibb.co/hRZ1bMy/78-removebg-preview.png'
          alt="Logo"
          style={{ height: '40px' }}
          onClick={() => navigate('/')} // Ensure logo click navigates home
        />
      </Box>

      {/* Navigation Pages 1 */}
      <Box sx={{ marginBottom: 2 }}>
        {pages1.map((page) => (
          <MenuItem
            key={page}
            component={Link}
            to={`/${page.toLowerCase()}`}
            onClick={toggleDrawer(false)}
            sx={{
              backgroundColor: location.pathname === `/${page.toLowerCase()}` ? '#06f9f3' : 'transparent',
              '&:hover': {
                backgroundColor: '#444',
              },
              color: location.pathname === `/${page.toLowerCase()}` ? '#000' : 'inherit',
            }}
          >
            <Typography sx={{ textAlign: 'center', fontFamily: 'Noto Kufi Arabic', fontSize: '18px' }}>
              {page}
            </Typography>
          </MenuItem>
        ))}
      </Box>
    </Box>
  );

  return (
    <AppBar position="static" sx={{ background: '#000', height: '100px' }} dir="rtl"> {/* Set direction to RTL for entire app bar */}
      <Container
        maxWidth="xl" // Ensure the container extends fully on xl screens
        sx={{
          '@media (min-width: 1600px)': {
            maxWidth: '100%', // Make container full width for extra-large screens
          },
          '@media (max-width: 1280px)': {
            maxWidth: 'lg', // Constrain container width on large screens (lg)
          },
        }}
      >
        <Toolbar disableGutters sx={{ height: '100px', display: 'flex', justifyContent: 'space-between' }}>

          {/* Logo */}
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
              display: 'flex',
              alignItems: 'center',
              fontFamily: 'monospace',
              color: 'inherit',
              textDecoration: 'none',
              fontSize: '15px', // Set font size for logo
              paddingRight: '16px', // Adjust padding for RTL
            }}
          >
            <img
              src='https://i.ibb.co/hRZ1bMy/78-removebg-preview.png'
              alt="Logo"
              style={{
                height: 'auto',
                maxWidth: '100%',
                width: 'auto',
                maxHeight: '50px',
              }}
            />
          </Typography>

          {/* Desktop Menu (Navigation Pages) */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-start', paddingRight: '20px', marginRight: '100px' }} dir="rtl">
            {pages1.map((page) => (
              page === 'أقسامنا' ? (
                <Button
                  key={page}
                  onClick={handleMenuClick} // Open dropdown on click
                  sx={{
                    my: 0.5,
                    mx: 1,
                    color: 'white',
                    display: 'block',
                    fontFamily: 'Noto Kufi Arabic',
                    fontSize: '17px',
                    borderRadius: '50px',
                    backgroundColor: location.pathname === `/${page.toLowerCase()}` ? '#06f9f3' : 'transparent',
                    '&:hover': {
                      backgroundColor: '#444',
                    },
                  }}
                >
                  {page}
                </Button>
              ) : (
                <Button
                  key={page}
                  component={Link}
                  to={`/${page.toLowerCase()}`}
                  sx={{
                    my: 0.5,
                    mx: 1,
                    color: 'white',
                    display: 'block',
                    fontFamily: 'Noto Kufi Arabic',
                    fontSize: '17px',
                    borderRadius: '50px',
                    backgroundColor: location.pathname === `/${page.toLowerCase()}` ? '#06f9f3' : 'transparent',
                    '&:hover': {
                      backgroundColor: '#444',
                    },
                  }}
                >
                  {page}
                </Button>
              )
            ))}
          </Box>

          {/* Contact Us Button */}
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2 }}>
            <Button
              sx={{
                color: 'white',
                fontFamily: 'Noto Kufi Arabic',
                borderRadius: '50px',
                display: { xs: 'none', sm: 'flex' },
                direction: 'ltr',
                fontSize: '20px',
                fontWeight: '600'
              }}
            >
              966 57 1883194
            </Button>

            <Button
              component={Link}
              to="/contact"
              sx={{
                color: 'white',
                fontFamily: 'Noto Kufi Arabic',
                fontSize: '15px',
                borderRadius: '50px',
                backgroundColor: '#0ff5ec',
                '&:hover': {
                  backgroundColor: '#444',
                },
                display: { xs: 'none', sm: 'flex' },
              }}
            >
              متجر الليزر
            </Button>
          </Box>

          {/* Mobile Menu (Drawer) */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="open navigation menu"
              onClick={toggleDrawer(true)}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={toggleDrawer(false)}
              sx={{
                '& .MuiDrawer-paper': {
                  backgroundColor: '#000',
                  color: '#fff',
                },
              }}
            >
              {drawerList()}
            </Drawer>
          </Box>
        </Toolbar>
      </Container>

      {/* Dropdown Menu for "أقسامنا" */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        sx={{
          '& .MuiMenu-paper': {
            backgroundColor: '#000',
            color: '#fff',
          },
        }}
      >
        {sections.map((section) => (
          <MenuItem
            key={section}
            component={Link}
            to={`/${section.toLowerCase()}`}
            onClick={handleClose}
            sx={{
              color: 'inherit',
              '&:hover': {
                backgroundColor: '#444',
              },
            }}
          >
            {section}
          </MenuItem>
        ))}
      </Menu>
    </AppBar>
  );
}

export default ResponsiveAppBar;
