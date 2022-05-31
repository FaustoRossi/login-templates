import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Login2 from "./components/Login2";
import Login3 from "./components/Login3";
import Navbar from "./components/Navbar";

function App() {
	return (
		<div>
			<Navbar />
			<Routes>
				<Route exact path="/" element={<Login />} />
				<Route exact path="/login2" element={<Login2 />} />
				<Route exact path="/login3" element={<Login3 />} />
			</Routes>
		</div>
	);
}

export default App;
