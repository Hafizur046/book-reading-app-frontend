import "./App.css";
//import { Redirect } from "react-router";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import LandingPage from "./components/landingPage";
import GithubCallback from "./components/githubCallback";
import Dashboard from "./components/dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/api/github/callback" element={<GithubCallback />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
