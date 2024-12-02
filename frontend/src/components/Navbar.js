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
import Menu from '@mui/material/Menu';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';  // Import dropdown icon

const pages1 = ['الرئيسية', 'من نحن', 'أقسامنا', 'شركائنا', 'اخبار الليزر', 'إتصل بنا']; // Pages
const sections = ['الشاشات', 'الطباعة', 'الهدايا الدعائية', 'الإعلام والإنتاج', 'التواصل الإجتماعي', 'تصميم المواقع', 'الفن التشكيلي', 'الخط العربي']; // Sample sections for the dropdown menu

function ResponsiveAppBar() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null); // State to handle dropdown menu
  const navigate = useNavigate();
  const location = useLocation(); // Get current location

  const toggleDrawer = (open) => () => setDrawerOpen(open);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget); // Open the menu when the button is clicked
  };

  const handleMenuClose = () => {
    setAnchorEl(null); // Close the menu when an item is selected or clicked outside
  };

  const drawerList = () => (
    <Box
      sx={{ width: 250, fontFamily: 'Noto Kufi Arabic' }} // Apply font-family here
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
      dir="rtl" // Set RTL for Drawer content
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
          page === 'أقسامنا' ? (
            // "أقسامنا" dropdown for mobile
            <Button
              key="أقسامنا"
              onClick={handleMenuClick}
              sx={{
                my: 0.5,
                mx: 2,
                color: location.pathname.includes('/sections') ? 'white' : 'inherit', // Active text color
                display: 'flex', // Flex to align icon next to text
                fontFamily: 'Noto Kufi Arabic',
                fontSize: { xs: '12px', sm: '14px', md: '16px' },
                borderRadius: '50px',
                backgroundColor: location.pathname.includes('/sections') ? '#0b5097' : 'transparent',
                '&:hover': {
                  backgroundColor: location.pathname !== '/sections' ? '#444' : '#0b5097',
                },
                alignItems: 'center',
              }}
            >
              أقسامنا
              <ArrowDropDownIcon sx={{ ml: 1 }} /> {/* Add dropdown arrow */}
            </Button>
          ) : (
            <MenuItem
              key={page}
              component={Link}
              to={`/${page.toLowerCase()}`}  // Corrected the path interpolation
              onClick={toggleDrawer(false)}
              sx={{
                backgroundColor: location.pathname === `/${page.toLowerCase()}` ? '#06f9f3' : 'transparent',
                '&:hover': {
                  backgroundColor: '#444',
                },
                color: location.pathname === `/${page.toLowerCase()}` ? 'white' : 'inherit',  // Active text color white
                padding: '10px', // Add padding for better click target
              }}
            >
              <Typography sx={{ textAlign: 'center', fontFamily: 'Noto Kufi Arabic', fontSize: '14px' }} >
                {page}
              </Typography>
            </MenuItem>
          )
        ))}
      </Box>
    </Box>
  );

  return (
    <AppBar position="static" sx={{ background: '#000', height: '100px' }} dir="rtl"> {/* Set AppBar to RTL */}
      <Container
        maxWidth="xxl"
        sx={{
          '@media (min-width: 1600px)': {
            maxWidth: '1900px', // Simulate XXL breakpoint for larger screens
          },
        }}
      >
        <Toolbar disableGutters sx={{ height: '100px', display: 'flex', justifyContent: 'space-between' }}> {/* Flex container */}

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
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
              fontSize: { xs: '16px', sm: '20px', md: '25px' },  // Reduced font size for the logo text
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
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-start', paddingRight: '40px' }} dir="rtl"> {/* Adjust right padding for RTL */}
            {pages1.map((page) => (
              page === 'أقسامنا' ? (
                // Dropdown for "أقسامنا" button
                <Button
                  key="أقسامنا"
                  onClick={handleMenuClick}
                  sx={{
                    my: 0.5,
                    mx: 2,
                    color: location.pathname.includes('/sections') ? 'white' : 'inherit', // Active text color
                    display: 'flex', // Flex to align icon next to text
                    fontFamily: 'Noto Kufi Arabic',
                    fontSize: { xs: '12px', sm: '14px', md: '16px' },
                    borderRadius: '50px',
                    backgroundColor: location.pathname.includes('/sections') ? '#0b5097' : 'transparent',
                    '&:hover': {
                      backgroundColor: location.pathname !== '/sections' ? '#444' : '#0b5097',
                    },
                    alignItems: 'center',
                  }}
                >
                  أقسامنا
                  <ArrowDropDownIcon sx={{ ml: 1 }} /> {/* Add dropdown arrow */}
                </Button>
              ) : (
                <Button
                  key={page}
                  component={Link}
                  to={`/${page.toLowerCase()}`}  // Corrected the path interpolation
                  sx={{
                    my: 0.5,
                    mx: 2,
                    color: location.pathname === `/${page.toLowerCase()}` ? 'white' : 'inherit',  // Active text color white
                    display: 'block',
                    fontFamily: 'Noto Kufi Arabic',
                    fontSize: { xs: '12px', sm: '14px', md: '16px' },  // Smaller font size
                    borderRadius: '50px',
                    backgroundColor: location.pathname === `/${page.toLowerCase()}` ? '#0b5097' : 'transparent',  // Active page background
                    '&:hover': {
                      backgroundColor: location.pathname !== `/${page.toLowerCase()}` ? '#444' : '#0b5097',
                    },
                  }}
                >
                  {page}
                </Button>
              )
            ))}
          </Box>

          {/* Register Online Button with Linear Gradient */}
          <Button
            component={Link}
            to="/register"  // Link to the register page or trigger a function
            sx={{
              color: 'white',
              fontFamily: 'Noto Kufi Arabic',
              fontSize: { xs: '12px', sm: '14px', md: '16px' },
              borderRadius: '50px',
              padding: '10px 20px',  // Add padding to make it more prominent
              ml: 2,  // Margin left to add space between this button and the others
              display: { xs: 'none', md: 'block' },  // Hide on mobile (xs) and show on medium (md) and up
              direction:'ltr',
              fontWeight:'600'
            }}
          >
          966 57 1883194
          </Button>

          <Button
            component={Link}
            to="/register"  // Link to the register page or trigger a function
            sx={{
              color: 'white',
              background:'rgb(15, 245, 236)',
              fontFamily: 'Noto Kufi Arabic',
              fontSize: { xs: '12px', sm: '14px', md: '16px' },
              borderRadius: '50px',
              padding: '10px 20px',  // Add padding to make it more prominent
              '&:hover': {
                backgroundImage: 'linear-gradient(to right, #005bb5, #003f8e)',  // Darker gradient on hover
              },
              ml: 2,  // Margin left to add space between this button and the others
              display: { xs: 'none', md: 'block' },  // Hide on mobile (xs) and show on medium (md) and up
            }}
          >
            متجر الليزر
          </Button>

          {/* Mobile Menu (Drawer) */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }} dir="ltr">
            <IconButton
              size="large"
              aria-label="open navigation menu"
              onClick={toggleDrawer(true)}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right" // Change drawer opening direction for RTL
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

      {/* Dropdown Menu for أقسامنا */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        sx={{ direction: 'rtl' }} // Set the direction to RTL for the menu
      >
        {sections.map((section) => (
          <MenuItem
            key={section}
            component={Link}
            to={`/${section.toLowerCase()}`} // Link to the specific section page
            onClick={handleMenuClose}
            sx={{
              fontFamily: 'Noto Kufi Arabic',
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
