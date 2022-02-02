import { Navigate } from "react-router";
import { useEffect, useState } from "react";
import { setUser } from "../actions";
import { useDispatch } from "react-redux";

export default function GithubCallback() {
  const [redirect, setRedirect] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    let params = new URLSearchParams(window.location.search);
    let code = params.get("code");
    fetchData();
    async function fetchData() {
      let response = await fetch(
        `http://localhost:3000/api/auth/github?code=${code}`,
        {
          method: "GET",
        }
      );
      let resBody = await response.json();
      dispatch(setUser(resBody));
      setRedirect("/dashboard");
    }
  }, []);

  if (redirect === "") return null;
  return <Navigate to={redirect} />;
}
