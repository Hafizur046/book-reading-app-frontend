import "./App.css";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import io from "socket.io-client";

//importing pages/routes
import LandingPage from "./routes/landingPage";
import GithubCallback from "./routes/githubCallback";
import Dashboard from "./routes/dashboard";

//importing contexts
import SocketContext from "./socket-middleware/socket-context";

//importing services
import { useGetSelfQuery } from "./services/user";
import { useEffect, useState } from "react";

function RedirectUnAthenticated(props) {
  const { isLoading, error } = useGetSelfQuery();
  if (isLoading) return <div>Loading...</div>;
  let isAuthenticated = error?.status !== 401;
  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }
  return <props.Component {...props} />;
}

function App() {
  const { isLoading, error } = useGetSelfQuery();
  let isAuthenticated = error?.status !== 401;
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    if (!isAuthenticated) return;
    const socket = io();
    setSocket(socket);
  }, [isLoading, isAuthenticated]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <SocketContext.Provider value={socket}>
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
          <Route path="/api/github/callback" element={<GithubCallback />} />
        </Routes>
      </BrowserRouter>
    </SocketContext.Provider>
  );
}

export default App;
