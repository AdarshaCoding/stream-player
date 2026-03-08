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

    // Reset logging
    hasLoggedRef.current = false;

    // Ensure autoplay works
    video.muted = true;
    video.playsInline = true;

    // Destroy previous instances
    if (hlsRef.current) {
      hlsRef.current.destroy();
      hlsRef.current = null;
    }

    if (dashRef.current) {
      dashRef.current.reset();
      dashRef.current = null;
    }

    video.src = "";

    // ---------------- HLS STREAM ----------------
    if (url.endsWith(".m3u8")) {
      onDebug({ streamType: "HLS" });

      if (Hls.isSupported()) {
        const hls = new Hls();
        hlsRef.current = hls;

        hls.loadSource(url);
        hls.attachMedia(video);

        hls.on(Hls.Events.MANIFEST_PARSED, (_, data) => {
          video.play().catch((err) => {
            console.warn("Autoplay prevented:", err);
          });

          onDebug({
            manifestLoaded: "YES",
            resolution: `${data.levels[0]?.width}x${data.levels[0]?.height}`,
            bitrate: data.levels[0]?.bitrate,
          });
        });

        video.addEventListener("playing", () => {
          if (!hasLoggedRef.current) {
            hasLoggedRef.current = true;
            onSuccess();
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

        hls.on(Hls.Events.ERROR, (_, data) => {
          console.warn("HLS error:", data);

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

    // ---------------- DASH STREAM ----------------
    if (url.endsWith(".mpd")) {
      onDebug({ streamType: "DASH" });

      const player = dashjs.MediaPlayer().create();
      dashRef.current = player;

      player.initialize(video, url, true);

      player.on("streamInitialized", () => {
        video.play().catch(() => {});

        onDebug({
          manifestLoaded: "YES",
        });
      });

      video.addEventListener("playing", () => {
        if (!hasLoggedRef.current) {
          hasLoggedRef.current = true;
          onSuccess();
        }
      });

      player.on("error", (e) => {
        console.warn("DASH error:", e);

        if (!hasLoggedRef.current) {
          hasLoggedRef.current = true;

          onError();

          onDebug({
            error: e.error,
          });
        }
      });
    }

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
        muted
        playsInline
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
