import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import logoBlack from "../assets/logo-black.png";
const CaptianLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [captianData, setCaptianData] = useState({});
    const handleSubmit = (e) => {
        e.preventDefault();
        setCaptianData({
            email: email,
            password: password,
        });
        setEmail("");
        setPassword("");
    }

    return (
        <div className="h-screen p-7 w-full flex flex-col justify-between">
            {/* upper div form */}
            <div className="flex flex-col justify-center w-full items-center gap-3">
                <img src={logoBlack} alt="logo" className="w-24 mb-2 self-start" />
                <form className="flex flex-col gap-5 w-full" onSubmit={(e) => { handleSubmit(e) }}>
                    <h3 className="text-xl font-semibold">What's your Email</h3>
                    <input required value={email} onChange={(e) => { setEmail(e.target.value) }} type="email" placeholder="example@email.com" className=" p-2 rounded-md bg-gray-200" />
                    <h3 className="text-xl font-semibold">Enter Password</h3>
                    <input type="password" placeholder="Enter Your Password" value={password} onChange={(e) => { setPassword(e.target.value) }} className=" p-2 rounded-md bg-gray-200" />
                    <button className="bg-black flex justify-center gap-2 items-center px-3 py-2 rounded-md font-semibold text-lg text-white w-full">Login</button>
                </form>
                <p className="text-sm">
                    Want to Join ? <Link to={"/captian-signup"} className="text-blue-600">Create new Account</Link>
                </p>
            </div>
            {/* lower div sign in as captian */}
            <div>
                <Link
                    to={"/login"}
                    className="bg-orange-400 flex justify-center items-center px-3 py-2 rounded-md font-semibold text-lg text-white w-full"
                >
                    Sign in as User
                </Link>
            </div>
        </div>
    );
};

export default CaptianLogin
