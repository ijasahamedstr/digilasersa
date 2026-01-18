import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Container,
  Button,
  MenuItem,
  Drawer,
  Menu,
  Stack,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  Menu as MenuIcon,
  ArrowDropDown as ArrowDropDownIcon,
  Call as CallIcon,
  Home as HomeIcon,
  Category as CategoryIcon,
  Info as InfoIcon,
  ContactSupport as ContactIcon,
  Build as BuildIcon,
  Storefront as StoreIcon,
  Close as CloseIcon,
} from "@mui/icons-material";

/** * NAVIGATION DATA 
 */
const pages1 = [
  { name: "الرئيسية", path: "/", icon: <HomeIcon /> },
  { name: "أقسامنا", path: "#", icon: <CategoryIcon /> },
  { name: "من نحن", path: "/من نحن", icon: <InfoIcon /> },
  { name: "اتصل بنا", path: "/اتصل بنا", icon: <ContactIcon /> },
];

const sections = [
  "قسم الشاشات",
  "قسم الفن التشكيلي",
  "قسم الطباعة",
  "قسم الهدايا الدعائية",
  "قسم الإعلام والميديا",
  "قسم السوشيال ميديا",
  "قسم البرمجيات",
  "قسم الصوتيات",
];

function ResponsiveAppBar() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  /**
   * HANDLERS
   */
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  /**
   * MOBILE DRAWER CONTENT
   * Designed with high-end UI effects
   */
  const drawerList = () => (
    <Box
      sx={{
        width: 320,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        background: "linear-gradient(180deg, #000000 0%, #111111 100%)",
        color: "#fff",
        boxShadow: "-10px 0 30px rgba(0,0,0,0.5)",
      }}
      role="presentation"
      dir="rtl"
    >
      {/* Drawer Header */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          p: 3,
        }}
      >
        <img
          src="https://i.ibb.co/hRZ1bMy/78-removebg-preview.png"
          alt="Logo"
          style={{ height: "45px", filter: "drop-shadow(0px 0px 5px #06f9f3)" }}
        />
        <IconButton onClick={toggleDrawer(false)} sx={{ color: "#06f9f3" }}>
          <CloseIcon />
        </IconButton>
      </Box>

      <Divider sx={{ bgcolor: "rgba(255,255,255,0.1)", mx: 2 }} />

      {/* Drawer Navigation Links */}
      <Box sx={{ flexGrow: 1, overflowY: "auto", py: 2, px: 2 }}>
        <List>
          {pages1.map((page) => {
            const isActive =
              location.pathname === page.path ||
              (page.name === "أقسامنا" &&
                sections.some((s) =>
                  location.pathname.includes(s.toLowerCase())
                ));

            return (
              <ListItem
                key={page.name}
                disablePadding
                sx={{ mb: 1.5, borderRadius: "15px", overflow: "hidden" }}
              >
                <Button
                  onClick={(e) => {
                    if (page.name === "أقسامنا") {
                      handleMenuClick(e);
                    } else {
                      navigate(page.path);
                      setDrawerOpen(false);
                    }
                  }}
                  sx={{
                    width: "100%",
                    justifyContent: "flex-start",
                    py: 2,
                    px: 3,
                    fontFamily: "Tajawal",
                    fontSize: "18px",
                    fontWeight: isActive ? 700 : 500,
                    color: isActive ? "#06f9f3" : "#ffffff",
                    backgroundColor: isActive
                      ? "rgba(6, 249, 243, 0.08)"
                      : "transparent",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      backgroundColor: "rgba(255, 255, 255, 0.05)",
                      transform: "scale(1.02)",
                    },
                  }}
                >
                  <ListItemIcon
                    sx={{
                      color: isActive ? "#06f9f3" : "rgba(255,255,255,0.7)",
                      minWidth: "45px",
                    }}
                  >
                    {page.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={page.name}
                    primaryTypographyProps={{
                      fontFamily: "Tajawal",
                      fontSize: "inherit",
                    }}
                  />
                  {page.name === "أقسامنا" && <ArrowDropDownIcon />}
                </Button>
              </ListItem>
            );
          })}
        </List>
      </Box>

      {/* Drawer Footer Actions (All Buttons Included) */}
      <Box
        sx={{
          p: 3,
          backgroundColor: "rgba(255,255,255,0.03)",
          borderTop: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <Stack spacing={2}>
          <Button
            component="a"
            href="https://wa.link/yo3er5"
            target="_blank"
            variant="contained"
            fullWidth
            startIcon={<CallIcon />}
            sx={{
              backgroundColor: "#fff",
              color: "#000",
              fontWeight: "bold",
              fontFamily: "Tajawal",
              py: 1.2,
              borderRadius: "50px",
              "&:hover": { backgroundColor: "#06f9f3" },
            }}
          >
            057 197 8888
          </Button>

          <Button
            component="a"
            href="https://sssplatform.com/login"
            target="_blank"
            fullWidth
            sx={{
              backgroundColor: "rgb(15, 245, 236)",
              color: "#000",
              fontWeight: "bold",
              fontFamily: "Tajawal",
              py: 1.2,
              borderRadius: "50px",
              boxShadow: "0 4px 15px rgba(15, 245, 236, 0.3)",
            }}
          >
            <BuildIcon sx={{ ml: 1, fontSize: "18px" }} /> منصة الصيانة
          </Button>

          <Button
            component="a"
            href="https://shop.digilaser.sa"
            target="_blank"
            fullWidth
            sx={{
              backgroundColor: "rgb(15, 245, 236)",
              color: "#000",
              fontWeight: "bold",
              fontFamily: "Tajawal",
              py: 1.2,
              borderRadius: "50px",
              boxShadow: "0 4px 15px rgba(15, 245, 236, 0.3)",
            }}
          >
            <StoreIcon sx={{ ml: 1, fontSize: "18px" }} /> متجر الليزر
          </Button>
        </Stack>

        <Typography
          variant="caption"
          sx={{
            display: "block",
            textAlign: "center",
            mt: 3,
            color: "rgba(255,255,255,0.4)",
            fontFamily: "Tajawal",
          }}
        >
          حقوق الطبع محفوظة © 2026 ديجي ليزر
        </Typography>
      </Box>
    </Box>
  );

  return (
    <AppBar
      position="fixed"
      sx={{
        background: "#000",
        height: "100px",
        boxShadow: "0px 2px 10px rgba(0,0,0,0.8)",
        transition: "0.3s ease-in-out",
      }}
      dir="rtl"
    >
      <Container
        maxWidth="xxl"
        sx={{
          height: "100%",
          "@media (min-width: 1600px)": {
            maxWidth: "1900px",
          },
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            height: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Logo Section */}
          <Box
            component={Link}
            to="/"
            sx={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            <img
              src="https://i.ibb.co/hRZ1bMy/78-removebg-preview.png"
              alt="Logo"
              style={{
                height: "auto",
                width: "auto",
                maxHeight: "55px",
                transition: "0.3s",
              }}
            />
          </Box>

          {/* Desktop Menu - Pages */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-start",
              paddingRight: "60px",
            }}
            dir="rtl"
          >
            {pages1.map((page) => {
              const isActive =
                location.pathname === page.path ||
                (page.name === "أقسامنا" &&
                  sections.some((s) =>
                    location.pathname.includes(s.toLowerCase())
                  ));

              return page.name === "أقسامنا" ? (
                <Button
                  key="أقسامنا"
                  onClick={handleMenuClick}
                  endIcon={<ArrowDropDownIcon />}
                  sx={{
                    my: 0.5,
                    mx: 2,
                    color: isActive ? "#fff" : "rgba(255,255,255,0.8)",
                    fontFamily: "Tajawal",
                    fontSize: "22px",
                    fontWeight: 600,
                    borderRadius: "50px",
                    backgroundColor: isActive ? "#0b5097" : "transparent",
                    "&:hover": { backgroundColor: "#333" },
                  }}
                >
                  {page.name}
                </Button>
              ) : (
                <Button
                  key={page.name}
                  component={Link}
                  to={page.path}
                  sx={{
                    my: 0.5,
                    mx: 2,
                    color: isActive ? "#fff" : "rgba(255,255,255,0.8)",
                    fontFamily: "Tajawal",
                    fontSize: "22px",
                    fontWeight: 600,
                    borderRadius: "50px",
                    backgroundColor: isActive ? "#0b5097" : "transparent",
                    "&:hover": {
                      backgroundColor: isActive ? "#0b5097" : "#333",
                    },
                  }}
                >
                  {page.name}
                </Button>
              );
            })}
          </Box>

          {/* Desktop - Right Side Actions */}
          <Button
            component="a"
            href="https://wa.link/yo3er5"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: "white",
              fontFamily: "Tajawal",
              fontSize: { xs: "12px", sm: "18px", md: "25px" },
              borderRadius: "50px",
              padding: "10px 20px",
              ml: 2,
              display: { xs: "none", md: "block" },
              direction: "ltr",
              fontWeight: "600",
              paddingLeft: { xs: "10px", sm: "50px", md: "55px" },
              whiteSpace: "nowrap",
            }}
          >
            <CallIcon
            sx={{
              mr: 1.5,                 // space between icon and number
              backgroundColor: "white",// or any color you want
              color: "green",          // icon color
              borderRadius: "50%",     // makes it round
              padding: "6px",          // creates the circle
              fontSize: "28px",        // optional: icon size
            }}
          />

            057 197 8888
          </Button>


              <Stack
              direction="row"
              sx={{
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                gap: "50px", // ✅ MORE space between buttons
              }}
            >
              <Button
                component="a"
                href="https://sssplatform.com/login"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: "#000000",
                  minWidth: "180px",
                  background: "rgb(15, 245, 236)",
                  fontFamily: "Tajawal",
                  fontSize: { xs: "12px", sm: "14px", md: "16px" },
                  borderRadius: "50px",
                  padding: "10px 20px",
                  whiteSpace: "nowrap",
                  "&:hover": {
                    backgroundImage: "linear-gradient(to right, #005bb5, #003f8e)",
                  },
                }}
              >
                منصة الصيانة
              </Button>

              <Button
                component="a"
                href="https://shop.digilaser.sa"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: "#000000",
                  minWidth: "180px",
                  background: "rgb(15, 245, 236)",
                  fontFamily: "Tajawal",
                  fontSize: { xs: "12px", sm: "14px", md: "16px" },
                  borderRadius: "50px",
                  padding: "10px 20px",
                  whiteSpace: "nowrap",
                  "&:hover": {
                    backgroundImage: "linear-gradient(to right, #005bb5, #003f8e)",
                  },
                }}
              >
                متجر الليزر
              </Button>
            </Stack>

          {/* Mobile Menu Trigger */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="menu"
              onClick={toggleDrawer(true)}
              sx={{ color: "#06f9f3" }}
            >
              <MenuIcon sx={{ fontSize: "40px" }} />
            </IconButton>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={toggleDrawer(false)}
              sx={{
                "& .MuiDrawer-paper": {
                  boxShadow: "none",
                  backgroundColor: "transparent",
                },
              }}
            >
              {drawerList()}
            </Drawer>
          </Box>
        </Toolbar>
      </Container>

      {/* Dropdown Menu for Sections (Shared Desktop/Mobile) */}
      <Menu
        id="sections-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        disableScrollLock={true}
        sx={{
          mt: "10px",
          "& .MuiPaper-root": {
            backgroundColor: "#111",
            color: "#fff",
            borderRadius: "15px",
            border: "1px solid rgba(6, 249, 243, 0.2)",
            minWidth: "220px",
          },
        }}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        {sections.map((section) => (
          <MenuItem
            key={section}
            component={Link}
            to={`/${section.toLowerCase()}`}
            onClick={() => {
              handleMenuClose();
              setDrawerOpen(false);
            }}
            sx={{
              fontFamily: "Tajawal",
              fontSize: "16px",
              py: 1.5,
              "&:hover": {
                backgroundColor: "rgba(6, 249, 243, 0.1)",
                color: "#06f9f3",
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