//import { useSelector } from "react-redux";
import { useGetSelfQuery } from "../services/user";

export default function Dashboard() {
  //const user = useSelector((state) => state.user);
  const { data } = useGetSelfQuery();

  return <h1>Hello, {data.username}</h1>;
}
