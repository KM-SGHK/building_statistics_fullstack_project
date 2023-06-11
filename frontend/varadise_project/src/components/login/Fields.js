import React from "react";
import { useState } from "react";
import { Button, Box, Typography, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { login, failedLogin } from "../../redux/auth/action";
import { startLoading } from "../../redux/loading/action";

export default function LoginFields() {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const textFieldStyle = {
    "& label": {
      color: "white",
    },
    "& label.Mui-focused": {
      color: "#A0AAB4",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#B2BAC2",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#E0E3E7",
      },
      "&:hover fieldset": {
        borderColor: "#B2BAC2",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#6F7E8C",
      },
      "& input": {
        color: "yellow",
      },
    },
  };
  const landingPageLayout = {
    marginTop: "15px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    "& > :not(style)": { m: 1, width: "25ch" },
  };
  const loginFieldDetails = [
    {
      fieldName: "userName",
      fieldLabel: "Username",
    },
    {
      fieldName: "password",
      fieldLabel: "Password",
    },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isValidLoginInput(userName, password)) {
      dispatch(login(userName, password));
      dispatch(startLoading())
    }

    if (!isValidLoginInput(userName, password)) {
      dispatch(failedLogin("Username & Password are required"));
      clearLoginCredentials();
    }
  };

  const clearLoginCredentials = () => {
    setUsername("");
    setPassword("");
  };

  const isValidLoginInput = (userName, password) => {
    let isFilled = userName.length > 0 && password.length > 0;
    return isFilled;
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={landingPageLayout}>
      <Box sx={{ paddingBottom: "30px" }}>
        <Typography variant="h3" color="white">
          Login
        </Typography>
      </Box>

      {loginFieldDetails.map((field) => {
        return (
          <TextField
            required
            sx={textFieldStyle}
            label={field.fieldLabel}
            variant="outlined"
            value={field.fieldName === "userName" ? userName : password}
            type={field.fieldName === "userName" ? "text" : "password"}
            onChange={(e) =>
              field.fieldName === "userName"
                ? setUsername(e.target.value)
                : setPassword(e.target.value)
            }
          />
        );
      })}

      <Box sx={{ paddingTop: "16px" }}>
        <Button
          variant="outlined"
          fullWidth={true}
          size={"large"}
          type="submit"
        >
          Enter
        </Button>
      </Box>
    </Box>
  );
}
