import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";

function StreamStatus({ status, url, time }) {
  return (
    <Card sx={{ mb: 3 }}>
      <CardContent>
        <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
          Stream Status
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <Typography>
            <b>Status:</b> {status}
          </Typography>
          <Typography>
            <b>Time:</b> {time}
          </Typography>
          <Typography>
            <b>URL:</b> {url}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

export default StreamStatus;
