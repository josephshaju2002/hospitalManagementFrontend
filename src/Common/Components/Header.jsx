import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { GiHospitalCross } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";

const pages = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Buy Medicines", path: "/buymed" },
  { name: "Meet the Doctor", path: "/getappo" },
  { name: "My Appointments", path: "/myappo" },
  { name: "Know About Health", path: "/awareness" },
  { name: "Contact Us", path: "/contact" },
  { name: "Cart", path: "/cart", icon: <FaCartPlus /> },
];

const settings = [
  { name: "Profile", path: "/profile" },
  { name: "My Appointments", path: "/myappo" },
  { name: "Buy Medicines", path: "/buymed" },
  { name: "Logout", path: "/login" },
];

function Header() {
  const navigate = useNavigate();

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "#2563EB" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <GiHospitalCross className="text-black text-3xl me-2" />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 800,
                letterSpacing: ".3rem",
                color: "black",
                textDecoration: "none",
                fontSize: "25px",
              }}
            >
              MEDIPULSE
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: "block", md: "none" } }}
              >
                {pages.map(({ name, path, icon }) => (
                  <MenuItem
                    key={name}
                    onClick={() => {
                      handleCloseNavMenu();
                      navigate(path);
                    }}
                  >
                    <Typography
                      textAlign="center"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      {icon && icon}
                      {name}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "black",
                textDecoration: "none",
              }}
            >
              MEDIPULSE
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map(({ name, path, icon }) => (
                <Button
                  key={name}
                  onClick={() => {
                    handleCloseNavMenu();
                    navigate(path);
                  }}
                  sx={{
                    my: 2,
                    mx: 2,
                    color: "black",
                    display: "flex",
                    backgroundColor: "#317aeeff",
                    "&:hover": {
                      backgroundColor: "#153f82ff",
                      color: "white",
                    },
                  }}
                >
                  {icon && icon}
                  {name}
                </Button>
              ))}
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map(({ name, path }) => (
                  <MenuItem
                    key={name}
                    onClick={() => {
                      handleCloseUserMenu();
                      navigate(path);
                    }}
                  >
                    <Typography textAlign="center">{name}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}

export default Header;
