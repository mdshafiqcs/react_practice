import { useLoaderData } from "react-router-dom"


export default function Github(){
  const data = useLoaderData();

  return (
    <>
      <div className="flex justify-center bg-gray-600">
        <div className="text-3xl text-white text-center p-4">
          <h1 className="mb-2">Github Followers: {data.followers}</h1>
          <img src={data.avatar_url} alt="github profile pic" width={300} />

        </div>
      </div>
    </>
  )
}