import { Navigate } from "react-router";
import { useEffect, useState } from "react";

export default function GithubCallback() {
  const [redirect, setRedirect] = useState("");

  useEffect(() => {
    let params = new URLSearchParams(window.location.search);
    let code = params.get("code");
    fetchData();
    async function fetchData() {
      await fetch(`http://localhost:3000/api/auth/github?code=${code}`, {
        method: "GET",
      });
      setRedirect("/dashboard");
    }
  }, []);

  if (redirect === "") return null;
  return <Navigate to={redirect} />;
}
