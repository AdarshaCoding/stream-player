import React, { useState } from "react";
import { Stack, TextField, Button } from "@mui/material";

function PlayerInput({ onSubmit }) {
  const [url, setUrl] = useState("");

  const handlePlay = () => {
    if (!url) return;
    onSubmit(url);
  };

  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <TextField
        label="Stream URL"
        variant="outlined"
        size="small"
        sx={{ width: 500 }}
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />

      <Button
        variant="contained"
        color="error"
        sx={{ padding: "6px 30px" }}
        onClick={handlePlay}
      >
        PLAY
      </Button>
    </Stack>
  );
}

export default PlayerInput;
