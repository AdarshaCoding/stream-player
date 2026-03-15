import { useState } from "react";
import { Stack, Typography, TextField, Button } from "@mui/material";
import { startScheduler } from "../services/monitorApi";

const SchedulerForm = () => {
  const [interval, setInterval] = useState("*/1 * * * *");

  const handleStart = async () => {
    const res = await startScheduler(interval);
    alert(res.message);
  };

  return (
    <Stack spacing={2}>
      <Typography variant="h6" color="text.primary">
        Schedule Job
      </Typography>

      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={2}
        alignItems="center"
      >
        <TextField
          label="Cron interval"
          value={interval}
          onChange={(e) => setInterval(e.target.value)}
          fullWidth
        />
        <Button color="primary" onClick={handleStart}>
          Start Scheduler
        </Button>
      </Stack>
    </Stack>
  );
};

export default SchedulerForm;
