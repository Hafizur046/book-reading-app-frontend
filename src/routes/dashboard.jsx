import { useEffect } from "react";
//import { useDispatch } from "react-redux";
import { useGetSelfQuery } from "../services/user";
import SocketContext from "../socket-middleware/socket-context";
import TestDeeplyNestedComponent from "./test-deeply-nested-component";

function Loader() {
  return <h1>Loading....</h1>;
}

export default function Dashboard() {
  const { isLoading, data } = useGetSelfQuery();
  useEffect(() => {
    console.log("Dashboard");
  }, []);

  if (isLoading) return <Loader />;
  return (
    <>
      <h1>Hello, {data?.username}</h1>
      <SocketContext.Consumer>
        {(socket) => <TestDeeplyNestedComponent socket={socket} />}
      </SocketContext.Consumer>
    </>
  );
}
