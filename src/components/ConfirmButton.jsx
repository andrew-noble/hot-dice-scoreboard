import React, { useState } from "react";
import Button from "@mui/material/Button";

export default function ConfirmButton(props) {
  const [confirm, setConfirm] = useState(false);
  const { confirmAction, confirmText, initialText } = props;

  return (
    <>
      {confirm ? (
        <>
          <Button
            disableElevation
            variant="contained"
            color="primary"
            onClick={confirmAction}
          >
            {confirmText}
          </Button>
          <Button
            disableElevation
            variant="contained"
            color="primary"
            onClick={() => setConfirm(false)}
          >
            Cancel
          </Button>
        </>
      ) : (
        <Button
          disableElevation
          variant="contained"
          color="secondary"
          onClick={() => setConfirm(true)}
        >
          {initialText}
        </Button>
      )}
    </>
  );
}
