import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/auth/action";

export default function ButtonAppBar() {
  const dispatch = useDispatch()
  const barNameStyle = {
    flexGrow: 9,
    display: "flex",
    justifyContent: "left",
    paddingRight: 15,
  };
  const logoutButtonStyle = {
    flexGrow: 1,
    display: "flex",
    justifyContent: "right",
  };
  const handleLogout = () => {
    dispatch(logout())
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "black" }}>
        <Toolbar>
          <Box sx={barNameStyle}>
            <Typography variant="h6" component="div">
              VARADISE DASHBOARD
            </Typography>
          </Box>
          <Box sx={logoutButtonStyle}>
            <Button variant="outlined" onClick={handleLogout} color="inherit">
              Log Out
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
