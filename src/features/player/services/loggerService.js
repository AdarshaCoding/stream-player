const LOG_KEY = "streamLogs";

export const saveLog = (log) => {
  const logs = JSON.parse(localStorage.getItem(LOG_KEY)) || [];

  logs.push(log);

  localStorage.setItem(LOG_KEY, JSON.stringify(logs));
};

export const getLogs = () => {
  return JSON.parse(localStorage.getItem(LOG_KEY)) || [];
};
