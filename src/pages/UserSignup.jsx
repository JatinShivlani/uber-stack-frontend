import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoBlack from "../assets/logo-black.png";
const UserSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [useData, setUserData] = useState({});
  const submithandler = (e) => {
    e.preventDefault();
    setUserData({
      fullName: {
        firstName: firstName,
        lastName: lastName,
      },
      email: email,
      password: password,
    });
    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
  };
  return (
    <div className="h-screen p-7 w-full flex flex-col justify-between">
      {/* upper div form */}
      <div className="flex flex-col justify-center w-full items-center gap-3">
        <img src={logoBlack} alt="logo" className="w-24 mb-2 self-start" />
        <form
          onSubmit={(e) => {
            submithandler(e);
          }}
          className="flex flex-col gap-3 w-full"
        >
          <h3 className="text-lg font-medium">Enter Name</h3>
          <div className="flex gap-3 w-full">
            <input
              required
              type="text"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              placeholder="First name"
              className=" p-2 rounded-md bg-gray-200 w-1/2"
            />
            <input
              type="text"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              placeholder="Last name"
              className=" p-2 rounded-md bg-gray-200 w-1/2"
            />
          </div>
          <h3 className="text-lg font-medium">Enter Email</h3>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Example@email.com"
            className=" p-2 rounded-md bg-gray-200"
          />
          <h3 className="text-lg font-medium">Enter Password</h3>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Enter Your Password"
            className=" p-2 rounded-md bg-gray-200"
          />
          <button className="bg-black flex justify-center gap-2 items-center px-3 py-2 rounded-md font-semibold text-lg text-white w-full">
            Sign-up
          </button>
        </form>
        <p className="text-sm">
          Already have a account ?{" "}
          <Link to={"/login"} className="text-blue-600">
            Login Here
          </Link>
        </p>
      </div>
      {/* lower div sign in as captian */}
      <div>
        <p className="text-[12px]">
          By signing up, you agree to receive updates, offers, and notifications via email,
          WhatsApp, and SMS.
        </p>
      </div>
    </div>
  );
};

export default UserSignup;
