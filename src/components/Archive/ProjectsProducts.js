import React from "react";

import { Link } from "react-router-dom";

import "../../styles/ProjectsProducts.css";
import my_ytb from "../../materials/img/ytb_channel.png";
import my_github from "../../materials/img/github_channel.png";

export const ProjectsProducts = () => {
	return (
		<div className="project-product">
			<div className="project-frame">
				<img className="image-pp" src={my_ytb} alt="Cover Youtube Channel" />
				<div className="content-pp">
					<h1>Youtube Channel</h1>
					<p>
						My channel is as follows: <strong>ChubbyBear.308</strong>
						<br />
						<em>
							This is where I store my vacation memories and photos, as well as
							my daily vlogs. Besides from that, I keep my favorite music videos
							and radio broadcasts.
							<br />I hope that everyone enjoys my vlogs and music videos.
						</em>
					</p>
				</div>
				<Link
					className="link-btn"
					to="https://www.youtube.com/@chubbybear.308"
					target="_blank"
				>
					<button className="see-more-btn" type="button">
						SEE MORE
					</button>
				</Link>
			</div>
			<div className="project-frame-2">
				<Link
					className="link-btn"
					to="https://github.com/kyduyennguyen"
					target="_blank"
				>
					<button className="see-more-btn" type="button">
						SEE MORE
					</button>
				</Link>
				<div className="content-pp">
					<h1>GitHub Channel</h1>
					<p>This is place I store my projects, coding practices,..</p>
				</div>
				<img
					className="image-pp-2"
					src={my_github}
					alt="Cover Github Channel"
				/>
			</div>
		</div>
	);
};
