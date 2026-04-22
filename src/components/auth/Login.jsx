import React,{useEffect} from "react";
import { useContext } from "react";
import { useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { getLocalStorage } from "../../utils/LocalStorage";

const Login = ({ handleLogin, users }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    setEmail(users[0])
  
  }, [users])
  


  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  };
  return (
    <div className="h-screen w-full flex justify-center items-center bg-neutral-950 text-neutral-300">
      <div className="border border-white bg-green-950/40 w-1/3 rounded-xl p-5">
        <form
          className="flex flex-col items-center justify-center my-10 gap-4"
          onSubmit={(e) => {
            handleFormSubmit(e);
          }}
        >
          <div className="gap-2 flex flex-col w-2/3">
            <label htmlFor="">Email:</label>
            {/* <input
              className="h-10 rounded border border-white bg-black/40 p-2"
              type="text"
              required
              placeholder="enter your email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            /> */}
            <select
              className="h-10 rounded border border-white bg-black/40 p-2"
              type="text"
              required
              placeholder="enter your email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            >
              {users.map((opt) => (
                <option key={opt} value={opt} className="bg-black/40 p-2 h-5 rounded">
                  {opt}
                </option>
              ))}
            </select>
          </div>
          <div className="gap-2 flex flex-col w-2/3">
            <label htmlFor="">Password:</label>
            <input
              className="h-10 rounded border border-white bg-black/40 p-2"
              type="password"
              required
              placeholder="enter your password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="mt-5 w-2/3">
            <button className="bg-green-950/95 w-full rounded-md h-10 border border-white cursor-pointer">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
