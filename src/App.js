import "./App.css";
//import { Redirect } from "react-router";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";

import LandingPage from "./components/landingPage";
import GithubCallback from "./components/githubCallback";
import Dashboard from "./components/dashboard";
//import { useDispatch } from "react-redux";
//import { useEffect } from "react";
//import { setUser, userLoaded } from "./actions";
//import { createSpecefiedUser } from "./features/user/userSlice";
import { useGetSelfQuery } from "./services/user";

function Loader() {
  return <h1>Loading....</h1>;
}

function App() {
  //const user = useSelector((state) => state.user);
  //const dispatch = useDispatch();
  //console.log("data:", data);

  const { data, isLoading, error } = useGetSelfQuery();
  if (error) {
    console.log("Unauthorized 401:", error?.status === 401);
    console.log(error);
    //return null;
  }
  console.log(error, error?.status === 401);
  if (error?.status === 401) {
    console.log("the statement is true");
  }

  //const userLoading = useSelector((state) => !!state.user.value.username);

  //useEffect(() => fetchUser(), []);

  //async function fetchUser() {
  //const response = await fetch("/api/auth/me");
  //const responseBody = await response.json();
  //dispatch(createSpecefiedUser(responseBody));
  ////dispatch(setUser(responseBody));
  ////dispatch(userLoaded());
  //}

  if (isLoading) return <Loader />;

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            data.username ? <Navigate to="/dashboard" /> : <LandingPage />
          }
        />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/api/github/callback" element={<GithubCallback />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
