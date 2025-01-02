import React from "react";

import "../../styles/Introduction.css";
import my_avatar from "../../materials/img/my-avatar.jpg";

export const Introduction = () => {
	return (
		<>
			<div className="intro-frame">
				<div className="intro-items-1">
					<img className="my-avatar" src={my_avatar} alt="My Avatar" />
				</div>
				<div className="intro-items-2">
					<h2 className="intro-title">DUYEN NGUYEN (Angelly)</h2>
					<h3 className="intro-title">Web Developer Software Engineer</h3>
					<h5 className="intro-title">
						<em>VietNam, since 1996</em>
					</h5>
					<p className="intro-quotes">
						I am a developer with more than 5 years of experience developing
						software, including more than 2 years of web development experience
						- at Endava VietNam company{" "}
						<i>(previously DEK Technologies Viet Nam)</i>.
					</p>
					<p className="intro-quotes">
						In addition to working, I like to spend my free time drawing,
						reading, watching movies, and taking walks while listening to music.
					</p>
				</div>
			</div>
		</>
	);
};
