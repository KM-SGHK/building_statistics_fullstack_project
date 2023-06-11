import React, { useState, useEffect } from "react";
import { Snackbar, Alert } from "@mui/material";

export default function ErrorMessageSnackBar({ error }) {
  const [open, setOpen] = useState(false);
  const [alertType, setAlertType] = useState("information");
  const vertical = "top";
  const horizontal = "center";

  useEffect(() => {
    if (error !== null) {
      setOpen(true);
      setAlertType("error");
    }
    return () => setOpen(false);
  }, [error]);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        key={vertical + horizontal}
      >
        <Alert
          onClose={handleClose}
          severity={alertType}
          sx={{ width: "100%" }}
        >
          {error}
        </Alert>
      </Snackbar>
    </div>
  );
}
