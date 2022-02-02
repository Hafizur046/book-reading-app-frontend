import { useSelector } from "react-redux";

export default function Dashboard() {
  const user = useSelector((state) => state.userReducer);

  return <h1>Hello, {user.username}</h1>;
}
