import { useGetSelfQuery } from "../services/user";

function Loader() {
  return <h1>Loading....</h1>;
}

export default function Dashboard() {
  const { isLoading, data } = useGetSelfQuery();

  if (isLoading) return <Loader />;
  return <h1>Hello, {data?.username}</h1>;
}
