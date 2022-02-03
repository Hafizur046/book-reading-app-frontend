import "./App.css";
//import { Redirect } from "react-router";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";

import LandingPage from "./components/landingPage";
import GithubCallback from "./components/githubCallback";
import Dashboard from "./components/dashboard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setUser, userLoaded } from "./actions";

function Loader() {
  return <h1>Loading....</h1>;
}

function App() {
  const user = useSelector((state) => state.userReducer);
  const userLoading = useSelector((state) => state.userLoadingReducer);
  const dispatch = useDispatch();

  useEffect(() => fetchUser(), []);

  async function fetchUser() {
    const response = await fetch("/api/auth/me");
    const responseBody = await response.json();
    dispatch(setUser(responseBody));
    dispatch(userLoaded());
  }

  if (userLoading) return <Loader />;

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            user.username ? <Navigate to="/dashboard" /> : <LandingPage />
          }
        />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/api/github/callback" element={<GithubCallback />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
