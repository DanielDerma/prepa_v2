import React, { useState, useEffect } from "react";
import { styled, ThemeProvider } from "@mui/styles";
import { createTheme } from "@mui/material/styles";

import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { mainListItems } from "./listItems";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";

import {
  Account,
  Admin,
  DashboardPage,
  Posts,
  SIIMain,
  SIIView,
} from "../pages";
import UseSwitchesCustom from "./DarkMode";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link
        color="inherit"
        href="https://industryconect.com.mx/"
        target="_blank"
      >
        Industry Conect
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
const mdTheme = createTheme({
  pallete: {
    // mode: "dark",
  },
});

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

function DashboardContent() {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("Dasd");

  function usePageViews() {
    let location = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
      const titleUrl = location.pathname;
      const title = titleUrl.slice(1).toLowerCase();
      const titleFL = title.charAt(0).toUpperCase();
      const titleLLS = title.slice(1).toLowerCase();
      const titleFinal = titleFL + titleLLS; // => /admin => Admin
      if (titleFinal.charAt(0) === "S") {
        setTitle(titleFinal.toUpperCase());
      } else {
        setTitle(titleFinal);
      }
    }, [location]);
  }

  function MainContent() {
    usePageViews();
    return (
      <Switch>
        <Route path="/admin">
          <Admin />
        </Route>
        <Route path="/dashboard">
          <DashboardPage />
        </Route>
        <Route path="/posts">
          <Posts />
        </Route>
        <Route path="/siimain">
          <SIIMain />
        </Route>
        <Route path="/siiview">
          <SIIView />
        </Route>
        <Route path="/">
          <Account />
        </Route>
      </Switch>
    );
  }

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: "24px", // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: "36px",
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              {title}
            </Typography>
            <IconButton color="inherit">
              <UseSwitchesCustom />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Router>
          <Drawer variant="permanent" open={open}>
            <Toolbar
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                px: [1],
              }}
            >
              <IconButton onClick={toggleDrawer}>
                <ChevronLeftIcon />
              </IconButton>
            </Toolbar>
            <Divider />
            <List>{mainListItems}</List>
          </Drawer>
          <Box
            component="main"
            sx={{
              backgroundColor: (theme) =>
                theme.palette.mode === "light"
                  ? theme.palette.grey[100]
                  : theme.palette.grey[900],
              flexGrow: 1,
              height: "100vh",
              overflow: "auto",
            }}
          >
            <Toolbar />
            <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
              <MainContent />
              <Copyright sx={{ pt: 4 }} />
            </Container>
          </Box>
        </Router>
      </Box>
    </ThemeProvider>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}
