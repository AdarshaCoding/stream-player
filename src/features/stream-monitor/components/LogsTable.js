import { useEffect, useState } from "react";
import {
  Typography,
  Button,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Stack,
} from "@mui/material";
import { fetchLogs } from "../services/monitorApi";

const LogsTable = () => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    loadLogs();
  }, []);

  const loadLogs = async () => {
    const data = await fetchLogs();
    setLogs(data);
  };

  return (
    <Stack spacing={2}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h6" color="text.primary">
          Stream Logs
        </Typography>
        <Button color="primary" onClick={loadLogs}>
          Refresh Logs
        </Button>
      </Stack>

      <TableContainer component={Paper} elevation={0}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Channel</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Latency</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {logs.map((log, i) => (
              <TableRow key={i} hover>
                <TableCell>{log.channelName}</TableCell>
                <TableCell>{log.status}</TableCell>
                <TableCell>{log.latency}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Stack>
  );
};

export default LogsTable;
