import React from "react";
import Typography from "@mui/material/Typography";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <Typography
        align="center"
        color="primary"
        sx={{
          position: "absolute",
          width: "100%",
          height: "2.5rem",
        }}
      >
        Andrew Noble | Copyright ⓒ {year}
      </Typography>
    </footer>
  );
}
