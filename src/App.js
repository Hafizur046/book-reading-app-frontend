import "./App.css";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";

//importing pages/routes
import LandingPage from "./routes/landingPage";
import GithubCallback from "./routes/githubCallback";
import Dashboard from "./routes/dashboard";

//importing contexts
import SocketContext from "./socket-middleware/socket-context";

//importing services
import { useGetSelfQuery } from "./services/user";

function RedirectUnAthenticated(props) {
  const { isLoading, error } = useGetSelfQuery();
  if (isLoading) return <div>Loading...</div>;
  let isAuthenticated = error?.status !== 401;
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  return <props.Component {...props} />;
}

function App() {
  const { isLoading, error } = useGetSelfQuery();
  let isAuthenticated = error?.status !== 401;

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
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
  );
}

export default App;
