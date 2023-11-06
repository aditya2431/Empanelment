import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import Link from "@material-ui/core/Link";
import List from "@mui/material/List";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ManageSearchOutlinedIcon from "@mui/icons-material/ManageSearchOutlined";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import AccountTreeOutlinedIcon from "@mui/icons-material/AccountTreeOutlined";
import HorizontalLinearStepper from "./HorizontalLinearStepper";
import { red } from "@mui/material/colors";
import { Navigate, useNavigate } from "react-router-dom";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import "./MiniDrawer.css";
const drawerWidth = 210;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),

  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const miniDrawerComponents=[{
  index:0,
  url:'/dashboard',
  component:"",
  menuName:'My Dashboard',
  icon:<DashboardIcon/>
},
// {
//   index:1,
//   url:'/dashboard',
//   component:"",
//   menuName:'My Workflows',
//   icon:<ManageSearchOutlinedIcon/>
// },
// {
//   index:1,
//   url:'/searchWorkflow',
//   component:"",
//   menuName:'Search Workflows',
//   icon:<ManageSearchOutlinedIcon/>
// },
{
  index:1,
  url:'/audit',
  component:"",
  menuName:'Audit Trails',
  icon:<ReceiptLongOutlinedIcon/>
},
{
  index:2,
  url:'/profile',
  component:"",
  menuName:'My Profile',
  icon:<AccountCircleOutlinedIcon/>
},
{
  index:3,
  url:'/',
  component:"",
  menuName:'Logout',
  icon:<LogoutOutlinedIcon/>
},
]
export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  return (
    <Box sx={{ display: "flex", px: 10 }}>
      {/* <CssBaseline /> */}

      <Toolbar></Toolbar>

      <Drawer className="drawer" variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={() => setOpen(!open)}>
            {open === false ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List className="drawerList">
         { miniDrawerComponents.map((_menuDetails)=>(
             <ListItemButton
             button
             component={Link}
             to={_menuDetails.url}
             // button component={Link} to="/"
             sx={{
               minHeight: 48,
               justifyContent: open ? "initial" : "center",
               px: 2.5,
             }}
           >
             <ListItemIcon
               sx={{
                 minWidth: 0,
                 mr: open ? 3 : "auto",
                 justifyContent: "center",
                 
               }}
             >
               {_menuDetails.icon}
             </ListItemIcon>
             <ListItemText primary={_menuDetails.menuName} sx={{ opacity: open ? 1 : 0 }} />
           </ListItemButton>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
      </Box>
    </Box>
  );
}
