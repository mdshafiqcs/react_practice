import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";


function Github() {
  const data = useLoaderData();
  // const [data, setData] = useState({});

  // useEffect(() => {
  //   const url = "https://api.github.com/users/mdshafiqcs";
  //   fetch(url)
  //   .then((res) =>  res.json())
  //   .then((res) => setData(res));
  // }, []);

  return (
    <>
      <div className="flex justify-center bg-gray-600">
      <div className="  text-white text-3xl p-4 text-center">
        <h1>Github Followers : {data.followers} </h1> <br />
        <div><img src={data.avatar_url} alt="github profile pic" width={300} /></div>
      </div>
      </div>
    </>
  )
}

export default Github;

