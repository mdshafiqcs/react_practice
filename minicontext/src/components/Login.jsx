import { useContext, useState } from "react";
import UserContext from "../context/UserContext";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(UserContext);

  function handleSubmit(e) {
    e.preventDefault();
    setUser({ username, password });
  }

  return (
    <>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />{" "}
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />{" "}
      <button
        onClick={handleSubmit}
        className="px-3 py-1 rounded-lg bg-blue-700 text-white cursor-pointer"
      >
        Login
      </button>
    </>
  );
}
