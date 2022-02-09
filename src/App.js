import "./App.css";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";

//importing pages/routes
import LandingPage from "./routes/landingPage";
import GithubCallback from "./routes/githubCallback";
import Dashboard from "./routes/dashboard";

//importing services
import { useGetSelfQuery } from "./services/user";

function App() {
  const { error } = useGetSelfQuery();
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            error?.status === 401 ? (
              <LandingPage />
            ) : (
              <Navigate to="/dashboard" />
            )
          }
        />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/api/github/callback" element={<GithubCallback />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
