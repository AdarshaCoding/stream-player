import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

import { Container, Typography, Card, CardContent } from "@mui/material";

import PlayerInput from "../components/PlayerInput";
import VideoPlayer from "../components/VideoPlayer";
import StreamDebugPanel from "../components/StreamDebugPanel";
import StreamStatus from "../components/StreamStatus";
import { saveLog } from "../services/loggerService";

function PlayerPage() {
  const [searchParams] = useSearchParams();

  const mediaURL = searchParams.get("mediaURL");
  const mediaLicense = searchParams.get("mediaLicense");

  const [url, setUrl] = useState(mediaURL || "");
  const [status, setStatus] = useState("");

  const [debug, setDebug] = useState({
    streamType: "",
    manifestLoaded: "",
    resolution: "",
    bitrate: "",
    buffer: "",
    playTime: "",
    error: "",
  });

  const handleDebugUpdate = (newData) => {
    setDebug((prev) => ({ ...prev, ...newData }));
  };

  const handleSuccess = () => {
    setStatus("SUCCESS");

    saveLog({
      id: Date.now(),
      url,
      status: "SUCCESS",
      time: new Date().toISOString(),
    });
  };

  const handleError = () => {
    setStatus("ERROR");

    saveLog({
      id: Date.now(),
      url,
      status: "ERROR",
      time: new Date().toISOString(),
    });
  };

  return (
    <Container maxWidth="lg">
      <Typography
        variant="h4"
        sx={{
          color: "#d32f2f",
          fontWeight: 700,
          mb: 3,
        }}
      >
        Stream Player
      </Typography>

      <Card sx={{ mb: 3 }}>
        <CardContent>
          <PlayerInput onSubmit={setUrl} />
        </CardContent>
      </Card>

      <Card sx={{ mb: 3 }}>
        <CardContent>
          <VideoPlayer
            url={url}
            onSuccess={handleSuccess}
            onError={handleError}
            onDebug={handleDebugUpdate}
          />
        </CardContent>
      </Card>

      <StreamStatus
        status={status}
        url={url}
        time={new Date().toLocaleTimeString()}
      />

      <StreamDebugPanel debug={debug} />
    </Container>
  );
}

export default PlayerPage;
