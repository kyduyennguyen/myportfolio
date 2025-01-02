import React from "react";

import "../styles/About.css";
import { Introduction } from "./About/Introduction";
import { Experience } from "./About/Experience";
import { Activities } from "./About/Activities";
import { ConnectContact } from "./About/ConnectContact";

function About() {
	return (
		<div className="about">
			<Introduction />
			<hr className="hr-about-experience" />
			<Experience />
			<Activities />
			<hr className="hr-about-experience" />
			<ConnectContact />
		</div>
	);
}

export default About;
