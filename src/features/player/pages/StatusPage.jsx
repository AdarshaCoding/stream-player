import React from "react";

import { useEffect, useState } from "react";
import { Container, Typography } from "@mui/material";
import { getLogs } from "../services/loggerService";
import PlayerStatusTable from "../components/PlayerStatusTable";

function StatusPage() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    setLogs(getLogs());
  }, []);

  return (
    <Container>
      <Typography variant="h4">Stream Status</Typography>

      <PlayerStatusTable logs={logs} />
    </Container>
  );
}

export default StatusPage;
