import React from "react";

import loginImg from "../assets/login2.jpg";
import {AiFillFacebook} from 'react-icons/ai'
import {FcGoogle} from 'react-icons/fc'
import AnimatedPage from "./AnimatedPage";
import Brand2 from "../assets/Brand2.png";

function Login3() {
	return (
		<AnimatedPage>
			<div className="relative w-full h-screen bg-zinc-900/60">
				<img
					className="absolute w-full h-full object-cover mix-blend-overlay"
					src={loginImg}
					alt="/"
				/>

				<div className="flex justify-center items-center h-full">
					<form className="max-w-[400px] w-full mx-auto bg-white p-8  shadow-md shadow-orange-600 rounded-3xl">
						<div className="text-4xl font-bold text-center py-4 relative "><img className="rounded-full" src={Brand2} alt=""/></div>
						<div className="flex justify-between py-8 -mt-4">
							<p className="border shadow-lg hover:shadow-xl px-6 py-2 relative rounded-xl  flex items-center">
								<AiFillFacebook className="mr-2 " /> Facebook
							</p>
							<p className="border shadow-lg hover:shadow-xl px-6 py-2 relative rounded-xl flex items-center">
								<FcGoogle className="mr-2 rounded-md" /> Google
							</p>
						</div>
						<div className="flex flex-col mb-4 font-medium">
							<label>Username</label>
							<input
								className="border relative bg-gray-100 p-2 rounded-xl"
								type="text"
							/>
						</div>
						<div className="flex flex-col font-medium ">
							<label>Password</label>
							<input
								className="border relative bg-gray-100 p-2 rounded-xl"
								type="password"
							/>
						</div>
						<button className="w-full py-3 mt-8 rounded-xl bg-orange-500 hover:bg-orange-400 relative text-white">
							Sign In
						</button>
						<p className="flex items-center mt-2 font-semibold">
							<input className="mr-2 " type="checkbox" />
							Remember Me
						</p>
						<p className="text-center mt-8 font-semibold">
							Not a member? Sign up now
						</p>
					</form>
				</div>
			</div>
		</AnimatedPage>
	);
}

export default Login3;
