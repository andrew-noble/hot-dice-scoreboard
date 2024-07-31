import React, { useState } from "react";
import Card from "@mui/material/Card";
// import CardHeader from "@mui/material/CardHeader";
// import CardContent from "@mui/material/CardContent";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import CasinoIcon from "@mui/icons-material/Casino";

export default function Player(props) {
  const { name, score, myTurn, playerColor } = props;

  const normalizeScore = (value) => Math.floor(value * 100) / 10000;

  return (
    <Box>
      <Typography
        style={
          myTurn
            ? { color: playerColor, fontSize: "xx-large" }
            : { color: playerColor, fontSize: "medium" }
        }
      >
        {name}
        {myTurn ? <CasinoIcon sx={{ marginLeft: "20px" }}></CasinoIcon> : null}
      </Typography>
      <Box>
        <LinearProgress
          variant="determinate"
          value={normalizeScore(score)}
          sx={{ height: "20px" }}
        ></LinearProgress>
      </Box>
      <Box>
        <Typography variant="h4" color="text.secondary">
          {score}
        </Typography>
      </Box>
    </Box>
  );
}
