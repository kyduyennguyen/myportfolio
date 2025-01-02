import React from "react";

import "../../styles/HomePage.css";
import { ProjectCard } from "./ProjectCard";

export const HomePage = () => {
	return (
		<>
			<div className="intro-work-page">
				<p>
					Welcome To My Portfolio! <br />
					My name is <span className="title-important">Duyen Nguyen</span>, you
					can call me Angelly.
					<br /> I am a{" "}
					<span className="title-important">
						Web Developer - Software Engineer
					</span>
					.
				</p>
			</div>
			<ProjectCard />
		</>
	);
};
