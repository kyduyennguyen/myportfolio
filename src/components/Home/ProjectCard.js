import React from "react";
import { NavLink } from "react-router-dom";
import "../../styles/ProjectCard.css";

import cv_img from "../../materials/img/imgProjects/cv_img.png";
import interactive_rating from "../../materials/img/imgProjects/interactive-rating.png";
import age_calculate from "../../materials/img/imgProjects/age_calculate.png";
import advice_generator from "../../materials/img/imgProjects/advice_generator.png";

export const ProjectCard = () => {
	// Must add 9 project cards
	const projects = [
		{
			id: "personal-cv",
			name: "My Resumes",
			link: "/about",
			image: cv_img,
			intro: "Personal Resumes | HTML | CSS ",
		},
		{
			id: "advice-generator",
			name: "Advice Gennerator App",
			link: "https://kyduyennguyen.github.io/frontendmentor/advice-generator-app-main/index.html",
			image: advice_generator,
			intro:
				"Generate a new piece of advice by clicking | HTML | CSS | JavaScript (third-party API)",
		},
		{
			id: "age-calculate",
			name: "Age Calculate App",
			link: "https://kyduyennguyen.github.io/frontendmentor/age-calculator-app-main/index.html",
			image: age_calculate,
			intro: "Calculate Your Age | HTML | CSS | JavaScript",
		},
		{
			id: "interactive-rating",
			name: "Interactive Rating",
			link: "https://kyduyennguyen.github.io/frontendmentor/interactive-rating-component-main/index.html",
			image: interactive_rating,
			intro: "Rate your interaction | HTML | CSS | JavaScript",
		},
	];

	return (
		<>
			<div className="card-container">
				<div className="card-items">
					<NavLink
						className="link-projects"
						to={projects[0].link}
						target="_blank"
					>
						<img
							className="img-project"
							src={projects[0].image}
							alt="my-resume"
						/>
						<div className="title-projects">
							<strong>{projects[0].name}</strong>
							<br />
							<hr className="hr-proj" />
							{projects[0].intro}
						</div>
					</NavLink>
				</div>
				<div className="card-items">
					<NavLink
						className="link-projects"
						to={projects[1].link}
						target="_blank"
					>
						<img
							className="img-project"
							src={projects[1].image}
							alt="my-works"
						/>
						<div className="title-projects">
							<strong>{projects[1].name}</strong>
							<br />
							<hr className="hr-proj" />
							{projects[1].intro}
						</div>
					</NavLink>
				</div>
				<div className="card-items">
					<NavLink
						className="link-projects"
						to={projects[2].link}
						target="_blank"
					>
						<img
							className="img-project"
							src={projects[2].image}
							alt="interactive-rating"
						/>
						<div className="title-projects">
							<strong>{projects[2].name}</strong>
							<br />
							<hr className="hr-proj" />
							{projects[2].intro}
						</div>
					</NavLink>
				</div>
				<div className="card-items">
					<NavLink
						className="link-projects"
						to={projects[3].link}
						target="_blank"
					>
						<img
							className="img-project"
							src={projects[3].image}
							alt="interactive-rating"
						/>
						<div className="title-projects">
							<strong>{projects[3].name}</strong>
							<br />
							<hr className="hr-proj" />
							{projects[3].intro}
						</div>
					</NavLink>
				</div>
			</div>
		</>
	);
};
