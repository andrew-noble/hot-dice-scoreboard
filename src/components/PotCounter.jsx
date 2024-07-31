import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

export default function PotCounter(props) {
  return (
    <Card variant="outlined" sx={{ maxWidth: "100px" }}>
      <CardContent sx={{ paddingBottom: "8px" }}>
        <Typography align="center">Pot</Typography>
        <Divider></Divider>
        <Typography sx={{ marginTop: "10px" }} align="center">
          {props.pot}
        </Typography>
      </CardContent>
    </Card>
  );
}
