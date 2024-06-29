import { useContext, useState } from "react";
import UserContext from "./context/UserContext";
import UserContextProvider from "./context/UserContextProvider";
import Login from "./components/Login";
import Profile from "./components/Profile";

function App() {
  

  return (
    <UserContextProvider>
      <div className="bg-gray-800 flex justify-center items-center w-full h-[100vh] ">
        <div>
          <Login/>
          <br />
          <div className="text-center text-white">
            <Profile/>
          </div>
        </div>
      </div>
    </UserContextProvider>
  );
}

export default App;
