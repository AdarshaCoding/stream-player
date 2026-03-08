import PlayerPage from "../features/player/pages/PlayerPage";
import StatusPage from "../features/player/pages/StatusPage";

export const routes = [
  {
    path: "/player",
    element: <PlayerPage />,
  },
  {
    path: "/status",
    element: <StatusPage />,
  },
];
