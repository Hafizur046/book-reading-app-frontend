import { useMemo } from "react";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import "./App.css";

//importing pages/routes
import LandingPage from "./routes/landingPage";
import GithubCallback from "./routes/githubCallback";
import Dashboard from "./routes/dashboard";
import Room from "./routes/room";

//importing contexts
import SocketContext, {
  SocketProvider,
} from "./socket-middleware/socket-context";

//importing services
import { useGetSelfQuery } from "./services/user";

function RedirectUnAthenticated(props) {
  const { isLoading, error } = useGetSelfQuery();
  const isAuthenticated = useMemo(() => error?.status !== 401, [error]);
  if (isLoading) return <div>Loading...</div>;
  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }
  return (
    <SocketContext.Consumer>
      {(socket) => <props.Component {...props} socket={socket} />}
    </SocketContext.Consumer>
  );
}

function App() {
  const { isLoading, error } = useGetSelfQuery();
  const isAuthenticated = error?.status !== 401;

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <SocketProvider isAuthenticated={isAuthenticated}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              !isAuthenticated ? <LandingPage /> : <Navigate to="/dashboard" />
            }
          />

          <Route
            path="/dashboard"
            element={<RedirectUnAthenticated Component={Dashboard} />}
          />
          <Route
            path="/room/:roomId"
            element={<RedirectUnAthenticated Component={Room} />}
          />
          <Route path="/api/github/callback" element={<GithubCallback />} />
        </Routes>
      </BrowserRouter>
    </SocketProvider>
  );
}

export default App;
