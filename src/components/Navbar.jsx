import React from "react";

import { NavLink } from "react-router-dom";

function Navbar() {
	return (
		<nav className="flex flex-col md:flex-row bg-gray-300 text-black shadow-md leading-none">
			<div className="flex items-center mx-5 py-5 md:py-0">
				<svg
					className="fill-current inline-block"
					width="34"
					height="34"
					viewBox="0 0 54 54"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
				</svg>
				<h1 className="text-2xl ml-2 inline-block">Brand</h1>
			</div>
			<div className="md:flex md:flex-grow bg-gray-200 font-semibold shadow-lg shadow-black-600 ">
				<ul className="text-lg md:flex md:ml-auto ">
					<li>
						<NavLink
							to="/"
							className="w-full md:w-auto p-5 inline-block bold border-b-4 border-white hover:border-white hover:bg-gray-400"
						>
							Login 1
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/login2"
							className="w-full md:w-auto p-5 inline-block bold border-b-4 border-transparent hover:border-white hover:bg-gray-400"
						>
							Login 2
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/login3"
							className="w-full md:w-auto p-5 inline-block bold border-b-4 border-transparent hover:border-white hover:bg-gray-400"
						>
							Login 3
						</NavLink>
					</li>
					<li></li>
				</ul>
			</div>
		</nav>
	);
}

export default Navbar;
