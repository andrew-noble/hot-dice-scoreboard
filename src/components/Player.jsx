import React, { useState } from "react";
import Card from "@mui/material/Card";
// import CardHeader from "@mui/material/CardHeader";
// import CardContent from "@mui/material/CardContent";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";

export default function Player(props) {
  const { name, score, myTurn } = props;

  const normaliseScore = (value) => Math.floor(value * 100) / 10000;

  return (
    <Box>
      <h3 style={myTurn ? { color: "red" } : { color: "black" }}>{name}</h3>
      <LinearProgress
        variant="determinate"
        value={normaliseScore(score)}
      ></LinearProgress>
    </Box>
  );
}
