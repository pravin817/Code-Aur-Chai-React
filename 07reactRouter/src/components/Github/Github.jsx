import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Github = () => {
  const data = useLoaderData();
  //   const [data, setData] = useState(0);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/pravin817")
  //       .then((res) => res.json())
  //       .then((res) => setData(res))
  //       .catch((error) => {
  //         console.log("error: ", error);
  //       });
  //   }, []);
  return (
    <div className="text-center m-5 text-white text-3xl bg-gray-600">
      Github Followers :{data?.followers}
      <img src={data?.avatar_url} alt="Git Picture" width={300} />
    </div>
  );
};

export default Github;
export const githubInfoLoader = async () => {
  const res = await fetch("https://api.github.com/users/pravin817");
  return res.json();
};
