import { Stack, Typography, Button } from "@mui/material";
import { runMonitor, stopScheduler } from "../services/monitorApi";

const MonitorControls = () => {
  const handleRun = async () => {
    const res = await runMonitor();
    alert(res.message);
  };

  const handleStop = async () => {
    const res = await stopScheduler();
    alert(res.message);
  };

  return (
    <Stack spacing={2}>
      <Typography variant="h6" color="text.primary">
        Monitor Controls
      </Typography>

      <Stack direction="row" spacing={2}>
        <Button color="primary" onClick={handleRun}>
          Quick Run
        </Button>
        <Button color="secondary" onClick={handleStop}>
          Stop Scheduler
        </Button>
      </Stack>
    </Stack>
  );
};

export default MonitorControls;
