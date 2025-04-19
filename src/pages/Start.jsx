import { BiRightArrowAlt } from "react-icons/bi"; 
import { AiOutlineArrowRight } from "react-icons/ai"; 
import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
const Start = () => {
  return (
    <div className="h-screen w-full flex flex-col justify-between bg-[url(https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,h_552,w_552/v1695150892/assets/f4/a597a1-db2d-46fd-8d6a-050f7c1e9634/original/airport-pickup.svg)] bg-cover bg-center">
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      <img src={logo} alt="logo" className="w-28 mt-5 ml-5  z-[1]" />
      <div className="bg-white flex flex-col gap-3 justify-center w-full py-3 items-center  z-[1]">
        <p className="self-start mx-3 text-xl font-semibold">Get Started with Uber</p>
        <Link to={"/login"} className="w-[80%]">
          {" "}
          <button className="bg-black flex justify-center gap-2 items-center px-3 py-2 rounded-md font-semibold text-lg text-white w-full">
            countinue
            <BiRightArrowAlt  className="p-0 m-0"/>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Start;
