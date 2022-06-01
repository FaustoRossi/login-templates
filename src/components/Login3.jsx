import React from "react";

import trees from "../assets/trees.jpg";
import Brand3 from "../assets/Brand3.png";
import AnimatedPage from "./AnimatedPage";

function Login3() {
	return (
		<AnimatedPage>
			<div className="w-full h-screen flex bg-gray-200/90">
				<div className="grid grid-cols-1 md:grid-cols-2 m-auto h-[550px] rounded-md shadow-md shadow-green-600 sm:max-w-[900px]">
					<div className="w-full h-[550px]  hidden md:block">
						<img className="w-full h-full" src={trees} alt="/" />
					</div>
					<div className="p-4 flex flex-col justify-around">
						<form>
							<div className="w-[450px]   flex justify-center">
								<img className="h-[250px] " src={Brand3} alt="" />
							</div>
							<div className="flex flex-col">
								<input
									className="border mb-2  p-2 mr-2 rounded-md"
									type="text"
									placeholder="Username"
								/>
								<input
									className="border p-2 rounded-md"
									type="password"
									placeholder="Password"
								/>
							</div>
							<button className="w-full py-2 my-4 bg-green-500 hover:bg-green-400  rounded-md">
								Sign In
							</button>
							<p className="text-center">Forgot Username or Password?</p>
						</form>
						<div className="flex justify-center">
							<p className="text-center border shadow-sm shadow-green-500  border-green-500 hover:bg-green-500 p-3 w-1/3 rounded-md">
								Sign Up
							</p>
						</div>
					</div>
				</div>
			</div>
		</AnimatedPage>
	);
}

export default Login3;
