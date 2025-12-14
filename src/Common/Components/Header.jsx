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
import { Link, useNavigate } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import { useState } from "react";
import { useEffect } from "react";

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
  // { name: "My Appointments", path: "/myappo" },
  // { name: "Buy Medicines", path: "/buymed" },
  { name: "Logout", path: "/login" },
];

function Header() {
  const navigate = useNavigate();

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [token,setToken] = useState("")

  const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
  const handleOpenUserMenu = (event) => setAnchorElUser(event.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);
  const handleCloseUserMenu = () => setAnchorElUser(null);

  useEffect(()=>{
    if(sessionStorage.getItem("token")){
      setToken(sessionStorage.getItem("token"))
    }
  },[])

  // console.log(token);
  

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#7E57C2", // Primary
        boxShadow: "0px 3px 12px rgba(126, 87, 194, 0.4)",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo */}
          <GiHospitalCross className="text-white text-3xl me-2" />
          <Typography
            variant="h6"
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontWeight: 800,
              letterSpacing: ".2rem",
              color: "#FAF7FF",
              textDecoration: "none",
              fontSize: "24px",
            }}
          >
            MEDIPULSE
          </Typography>

          {/* Mobile Menu Icon */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map(({ name, path, icon }) => (
                <MenuItem
                  key={name}
                  onClick={() => {
                    navigate(path);
                    handleCloseNavMenu();
                  }}
                >
                  <Typography sx={{ display: "flex", gap: "8px" }}>
                    {icon && icon}
                    {name}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Mobile Logo */}
          <Typography
            variant="h5"
            noWrap
            sx={{
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontWeight: 700,
              letterSpacing: ".2rem",
              color: "#FAF7FF",
              textDecoration: "none",
            }}
          >
            MEDIPULSE
          </Typography>

          {/* Desktop Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map(({ name, path, icon }) => (
              <Button
                key={name}
                onClick={() => navigate(path)}
                sx={{
                  my: 2,
                  mx: 1,
                  color: "#FAF7FF",
                  backgroundColor: "#9575CD", // Accent
                  borderRadius: "8px",
                  "&:hover": {
                    backgroundColor: "#5E35B1", // PrimaryDark
                  },
                }}
              >
                {icon && icon}
                {name}
              </Button>
            ))}
          </Box>

          {/* Avatar / Settings */}

          {token && <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="User Menu">
              <IconButton onClick={handleOpenUserMenu}>
                <Avatar alt="User" />
              </IconButton>
            </Tooltip>
            <Menu
              anchorEl={anchorElUser}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map(({ name, path }) => (
                <MenuItem
                  key={name}
                  onClick={() => {
                    navigate(path);
                    handleCloseUserMenu();
                  }}
                >
                  <Typography>{name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>}

          {!token &&<div>
            <Link to={"/login"}>
            <button className="p-3 rounded" style={{ color: "#9575CD",backgroundColor:"white" }}>LOGIN</button>
            </Link>
            
          </div>}
          
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
