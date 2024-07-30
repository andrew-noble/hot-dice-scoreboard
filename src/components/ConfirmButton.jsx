import React, { useState } from "react";
import Button from "@mui/material/Button";
import { ButtonGroup } from "@mui/material";

export default function ConfirmButton(props) {
  const [confirm, setConfirm] = useState(false);
  const { confirmAction, confirmText, initialText } = props;

  return (
    <>
      {!confirm ? (
        <Button
          disableElevation
          variant="contained"
          color="secondary"
          onClick={() => setConfirm(true)}
        >
          {initialText}
        </Button>
      ) : (
        <ButtonGroup variant="outlined">
          <Button
            disableElevation
            color="primary"
            // After confirming, I wan't to send action AND reset the button to unconfirmed
            onClick={confirmAction}
          >
            {confirmText}
          </Button>
          <Button
            disableElevation
            color="primary"
            onClick={() => setConfirm(false)}
          >
            Cancel
          </Button>
        </ButtonGroup>
      )}
    </>
  );
}
