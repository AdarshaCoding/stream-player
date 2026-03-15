import PlayerPage from "../features/player/pages/PlayerPage";
import StatusPage from "../features/player/pages/StatusPage";
import StreamMonitorPage from "../features/stream-monitor/pages/StreamMonitorPage";

export const routes = [
  {
    path: "/player",
    element: <PlayerPage />,
  },
  {
    path: "/status",
    element: <StatusPage />,
  },
  {
    path: "/monitor",
    element: <StreamMonitorPage />,
  },
];
