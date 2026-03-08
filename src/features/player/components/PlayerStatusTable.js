import React from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

function PlayerStatusTable({ logs }) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>ID</TableCell>
          <TableCell>URL</TableCell>
          <TableCell>Status</TableCell>
          <TableCell>Time</TableCell>
        </TableRow>
      </TableHead>

      <TableBody>
        {logs.map((log) => (
          <TableRow key={log.id}>
            <TableCell>{log.id}</TableCell>
            <TableCell>{log.url}</TableCell>
            <TableCell>{log.status}</TableCell>
            <TableCell>{log.time}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
export default PlayerStatusTable;
