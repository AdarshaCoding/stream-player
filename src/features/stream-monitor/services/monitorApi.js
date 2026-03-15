const API_BASE = "http://localhost:4000/api";

export async function runMonitor() {
  const res = await fetch(`${API_BASE}/monitor/run`, {
    method: "POST",
  });
  return res.json();
}

export async function startScheduler(interval) {
  const res = await fetch(`${API_BASE}/monitor/start`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ interval }),
  });
  return res.json();
}

export async function stopScheduler() {
  const res = await fetch(`${API_BASE}/monitor/stop`, {
    method: "POST",
  });
  return res.json();
}

export async function fetchLogs() {
  const res = await fetch(`${API_BASE}/logs`);
  return res.json();
}

export async function fetchStatus() {
  const res = await fetch(`${API_BASE}/monitor/status`);
  return res.json();
}
