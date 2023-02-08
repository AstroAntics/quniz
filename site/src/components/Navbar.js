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
import SchoolIcon from "@mui/icons-material/School";
import { createTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";

const pages = ["Home", "The Quiz", "Log In", "Register", "Who We Are", "Help"];
const routelinks = ["/", "the-quiz", "login", "register", "about", "help"]; // deprecated
const settings = ["Profile", "Account", "Dashboard", "Logout"];
const slugify = require("slugify");

const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    primary: {
      main: "#0971f1",
      darker: "#053e85",
      navcol: "#3C6E71",
    },
    neutral: {
      main: "#64748B",
      contrastText: "#fff",
    },
    navcolors: {
      main: "#3C6E71",
    }
  },
});

export default function ResponsiveAppBar() {
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
    <div id="headerBar">
      <ThemeProvider theme={theme}>
        <AppBar
          position="static"
          color="navcolors"
          enableColorOnDark={true}
          sx={{
            color: "36CE71",
          }}
        >
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <SchoolIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1, color: "white" }} />
              <Typography
                variant="h3"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "sans-serif",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "white !important",
                  textDecoration: "none",
                }}
              >
                qUNIz
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
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  {pages.map((page) => (
                    <MenuItem 
                    key={page} 
                    component={Link}
                    onClick={handleCloseNavMenu}
                    to={slugify(page, {lower: true})}
                    >
                      <a href={page.toLowerCase}>{page}</a>
                    </MenuItem>
                  ))}
                  {pages.map((page) => (
                  <Button
                    key={page}
                    component={Link}
                    to={slugify(page, { lower: true })}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    <a href={page.toLowerCase}>{page}</a>
                  </Button>
                ))}
                </Menu>
              </Box>
              <SchoolIcon sx={{ display: { xs: "flex", md: "none" }, color: "white", mr: 1 }} />
              <Typography
                variant="h5"
                noWrap
                component="a"
                href=""
                sx={{
                  mr: 2,
                  display: { xs: "flex", md: "none" },
                  flexGrow: 1,
                  fontFamily: "sans-serif",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "white",
                  textDecoration: "none",
                }}
              >
                qUNIz
              </Typography>
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                {/*eslint-disable-next-line*/}
                {routelinks.map((route) => {
                  <Link href={route}></Link>;
                })}
                {pages.map((page) => (
                  <Button
                    key={page}
                    component={Link}
                    to={slugify(page, { lower: true })}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    <a href={page.toLowerCase}>{page}</a>
                  </Button>
                ))}
              </Box>

              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="Dev Eloper" src="#" title="Dev Eloper" />
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
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </ThemeProvider>
    </div>
  );
}
