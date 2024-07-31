import React from "react";
import { Box, Typography, Link } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export default function Explanation(props) {
  return (
    <>
      <Accordion sx={{ margin: "30px" }}>
        <AccordionSummary expandIcon={<ArrowDropDownIcon />}>
          <Typography>How to Play</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color="primary" variant="body1" gutterBottom>
            Hot dice aka "around the corner" aka "farkle" is a dice game where
            players take turns building a pot of points via dice rolls. Each
            turn starts with 6 dice with which the player needs to roll a 1
            (worth 100 pts), 5 (worth 50pts), or another
            <Link href="https://www.thedarkimp.com/wp-content/uploads/2022/01/farkle-scoresheet.png">
              valid combination
            </Link>
            to survive. Upon scoring, one or more scoring die (1 or 5 or combo)
            is removed and put into the pot of points, and the player may choose
            to "push their luck" by rolling again with the remaining dice. This
            continues until the player (1) "busts", (2) cashes out, or goes
            "around the corner" by scoring with every die remaining in any
            particular roll, whereupon they retain their pot and get a fresh
            batch of 6 die to continue building their pot with.
          </Typography>
          <br />
          <Typography color="primary" variant="body1" gutterBottom>
            (1) If the player does not score on any given roll, they bust and
            forfeit the entire pot, earning no points, and the next player
            starts again, rolling with 6 dice.
          </Typography>
          <br />
          <Typography color="primary" variant="body1" gutterBottom>
            (2) After any scoring roll, a player may choose to cash their points
            out, whereupon their accumulated pot is added to their score, and
            the next player rolls. Critically, the next player has the
            opportunity to build off the player who just cashed out, rolling the
            dice that remain uncommitted to the pot. Alternatively, the player
            can simply start a new pot, rolling with all 6 dice.
          </Typography>
          <br />
          <Typography color="primary" variant="body1" gutterBottom>
            Several players can string together pots, building a huge upside for
            whomever is rolling the dice. Everyone can benefit off these runs,
            which is what makes the game fun.
          </Typography>
          <br />
          <Typography color="primary" variant="body1" gutterBottom>
            The game continues until any player achieves 10,000 points, at which
            time all the remaining players are given one turn to try and catch
            this leader. The player with the highest remaining points, wins.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
}
