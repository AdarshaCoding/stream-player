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
        placeholder="Enter stream URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />

      <Button color="primary" onClick={handlePlay}>
        Play
      </Button>
    </Stack>
  );
}

export default PlayerInput;
