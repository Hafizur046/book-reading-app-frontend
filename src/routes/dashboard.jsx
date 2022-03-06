import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useGetSelfQuery } from "../services/user";
import { initializeConnection } from "../socket-middleware/socketSlice";

function Loader() {
  return <h1>Loading....</h1>;
}

export default function Dashboard() {
  const { isLoading, data } = useGetSelfQuery();
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("Dashboard");
    dispatch(initializeConnection());
  }, []);

  if (isLoading) return <Loader />;
  return <h1>Hello, {data?.username}</h1>;
}
