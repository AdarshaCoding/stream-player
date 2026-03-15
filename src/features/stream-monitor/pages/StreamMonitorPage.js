import { Container, Typography, Stack, Paper } from "@mui/material";
import MonitorControls from "../components/MonitorControls";
import SchedulerForm from "../components/SchedulerForm";
import LogsTable from "../components/LogsTable";

const StreamMonitorPage = () => {
  return (
    <Container sx={{ py: 4 }} maxWidth="xl">
      <Typography variant="h4" color="primary" gutterBottom>
        Stream Monitor Dashboard
      </Typography>

      <Stack spacing={3}>
        <Paper sx={{ p: 3 }}>
          <SchedulerForm />
        </Paper>

        <Paper sx={{ p: 3 }}>
          <MonitorControls />
        </Paper>

        <Paper sx={{ p: 3 }}>
          <LogsTable />
        </Paper>
      </Stack>
    </Container>
  );
};

export default StreamMonitorPage;
