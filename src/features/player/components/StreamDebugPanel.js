import React from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";

function StreamDebugPanel({ debug }) {
  return (
    <Card sx={{ mt: 3 }}>
      <CardContent>
        <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
          Stream Debug Panel
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography>
              <b>Stream Type:</b> {debug.streamType}
            </Typography>
          </Grid>

          <Grid item xs={6}>
            <Typography>
              <b>Manifest Loaded:</b> {debug.manifestLoaded}
            </Typography>
          </Grid>

          <Grid item xs={6}>
            <Typography>
              <b>Resolution:</b> {debug.resolution}
            </Typography>
          </Grid>

          <Grid item xs={6}>
            <Typography>
              <b>Bitrate:</b> {debug.bitrate}
            </Typography>
          </Grid>

          <Grid item xs={6}>
            <Typography>
              <b>Buffer Health:</b> {debug.buffer}
            </Typography>
          </Grid>

          <Grid item xs={6}>
            <Typography>
              <b>Playback Time:</b> {debug.playTime}
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography>
              <b>Error:</b> {debug.error}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default StreamDebugPanel;
