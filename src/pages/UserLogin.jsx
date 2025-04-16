import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logoBlack from "../assets/logo-black.png";
import { UserDataContext } from "../context/UserContext";
import axios from "axios";
const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const naviagte = useNavigate();
  const { user, setUser } = useContext(UserDataContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      email: email,
      password: password,
    };
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userData);
    if (response.status == 200) {
      const data = response.data;
      setUser(data.user);
      localStorage.setItem('token', data.token);
      naviagte("/home");
    }
    setEmail("");
    setPassword("");
  };

  return (
    <div className="h-screen p-7 w-full flex flex-col justify-between">
      {/* upper div form */}
      <div className="flex flex-col justify-center w-full items-center gap-3">
        <img src={logoBlack} alt="logo" className="w-24 mb-2 self-start" />
        <form
          className="flex flex-col gap-5 w-full"
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <h3 className="text-xl font-semibold">What's your Email</h3>
          <input
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            placeholder="example@email.com"
            className=" p-2 rounded-md bg-gray-200"
          />
          <h3 className="text-xl font-semibold">Enter Password</h3>
          <input
            type="password"
            placeholder="Enter Your Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className=" p-2 rounded-md bg-gray-200"
          />
          <button className="bg-black flex justify-center gap-2 items-center px-3 py-2 rounded-md font-semibold text-lg text-white w-full">
            Login
          </button>
        </form>
        <p className="text-sm">
          New here?{" "}
          <Link to={"/signup"} className="text-blue-600">
            Create new Account
          </Link>
        </p>
      </div>
      {/* lower div sign in as captain */}
      <div>
        <Link
          to={"/captain-login"}
          className="bg-green-400 flex justify-center items-center px-3 py-2 rounded-md font-semibold text-lg text-white w-full"
        >
          Sign in as captain
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;
