import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/NavBar.css";
import logo from "../materials/img/logo.png";

export const NavBar = () => {
	return (
		<div className="navigation">
			<nav className="navbar">
				<div className="container">
					<NavLink className="navbar-logo" to="/">
						<img className="logo" src={logo} alt="Duyen Nguyen" />
					</NavLink>
					<div className="nav-menu">
						<div className="nav-items">
							<NavLink className="nav-link" to="/">
								Home
							</NavLink>

							<NavLink className="nav-link" to="/about">
								About
							</NavLink>

							<NavLink className="nav-link" to="/contact">
								Contact
							</NavLink>

							<NavLink className="nav-link" to="/archive">
								Archive
							</NavLink>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
};
