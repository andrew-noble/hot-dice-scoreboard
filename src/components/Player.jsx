import React, { useState } from "react";
import Card from "@mui/material/Card";
// import CardHeader from "@mui/material/CardHeader";
// import CardContent from "@mui/material/CardContent";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";

export default function Player(props) {
  const { name, score } = props;
  return (
    <Box>
      {name}
      <LinearProgress variant="determinate" value={score}></LinearProgress>
    </Box>
  );
}
