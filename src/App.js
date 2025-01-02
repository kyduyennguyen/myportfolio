import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Archive from "./components/Archive";
import Footer from "./components/Footer";
import MyWorks from "./components/MyWorks";

function App() {
	return (
		<Router>
			<NavBar />
			<Routes>
				<Route
					exact
					path="/"
					element={<Home />}
				/>
				<Route
					path="/about"
					element={<About />}
				/>
				<Route
					path="/contact"
					element={<Contact />}
				/>
				<Route
					path="/archive"
					element={<Archive />}
				/>
				<Route
					path="/myworks"
					element={<MyWorks />}
				/>
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
