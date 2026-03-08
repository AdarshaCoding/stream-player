import React, { useEffect, useRef } from "react";
import Hls from "hls.js";
import dashjs from "dashjs";
import { Box } from "@mui/material";

function VideoPlayer({ url, onSuccess, onError, onDebug }) {
  const videoRef = useRef(null);
  const hlsRef = useRef(null);
  const dashRef = useRef(null);
  const hasLoggedRef = useRef(false);

  useEffect(() => {
    if (!url) return;

    const video = videoRef.current;

    // Reset flags
    hasLoggedRef.current = false;

    // Destroy previous players
    if (hlsRef.current) {
      hlsRef.current.destroy();
      hlsRef.current = null;
    }

    if (dashRef.current) {
      dashRef.current.reset();
      dashRef.current = null;
    }

    // -------- HLS STREAM --------
    if (url.endsWith(".m3u8")) {
      onDebug({ streamType: "HLS" });

      if (Hls.isSupported()) {
        const hls = new Hls();
        hlsRef.current = hls;

        hls.loadSource(url);
        hls.attachMedia(video);

        hls.on(Hls.Events.MANIFEST_PARSED, (_, data) => {
          video.play();

          onDebug({
            manifestLoaded: "YES",
            resolution: `${data.levels[0]?.width}x${data.levels[0]?.height}`,
            bitrate: data.levels[0]?.bitrate,
          });
        });

        // Verify playback actually started
        video.addEventListener("playing", () => {
          if (!hasLoggedRef.current) {
            onSuccess();
            hasLoggedRef.current = true;
          }
        });

        hls.on(Hls.Events.FRAG_BUFFERED, () => {
          const buffer = video.buffered.length
            ? video.buffered.end(0) - video.currentTime
            : 0;

          onDebug({
            buffer: `${buffer.toFixed(2)} sec`,
            playTime: `${video.currentTime.toFixed(2)} sec`,
          });
        });

        // Handle errors correctly
        hls.on(Hls.Events.ERROR, (_, data) => {
          console.log("HLS Error Event:", data);

          if (data.fatal && !hasLoggedRef.current) {
            hasLoggedRef.current = true;

            onError();

            onDebug({
              error: data.type,
            });

            hls.destroy();
          }
        });
      }
    }

    // -------- DASH STREAM --------
    if (url.endsWith(".mpd")) {
      onDebug({ streamType: "DASH" });

      const player = dashjs.MediaPlayer().create();
      dashRef.current = player;

      player.initialize(video, url, true);

      player.on("streamInitialized", () => {
        onDebug({
          manifestLoaded: "YES",
        });
      });

      video.addEventListener("playing", () => {
        if (!hasLoggedRef.current) {
          onSuccess();
          hasLoggedRef.current = true;
        }
      });

      player.on("error", (e) => {
        if (!hasLoggedRef.current) {
          hasLoggedRef.current = true;

          onError();

          onDebug({
            error: e.error,
          });
        }
      });
    }

    // Cleanup when URL changes
    return () => {
      if (hlsRef.current) {
        hlsRef.current.destroy();
        hlsRef.current = null;
      }

      if (dashRef.current) {
        dashRef.current.reset();
        dashRef.current = null;
      }
    };
  }, [url]);

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <video
        ref={videoRef}
        controls
        style={{
          width: "100%",
          maxWidth: "900px",
          height: "450px",
          borderRadius: "10px",
          backgroundColor: "black",
        }}
      />
    </Box>
  );
}

export default VideoPlayer;
