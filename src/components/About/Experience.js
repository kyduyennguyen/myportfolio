import React from "react";

import "../../styles/Experience.css";

export const Experience = () => {
	return (
		<>
			<div className="total-experience">
				{/* Education part */}
				<div className="experience">
					<h3 className="title-exp">EDUCATION</h3>
					<hr className="hr-experience" />
					<section className="section-exp">
						<h4 className="title-names-exp">Dong Nai Technology University</h4>
						<p className="content-exp">
							I graduated with an Engineer of Information Technology degree
							(B.E)
						</p>
						<p className="content-exp">GPA: 3.22/4</p>
						<h6>
							<em>Sep 2016 - Oct 2020</em>
						</h6>
					</section>
					<hr className="hr-exp" />
					<section className="section-exp">
						<h4 className="title-names-exp">FUNIX</h4>
						<p className="content-exp">
							I took the Full Stack course for Web developer.
						</p>
						<p className="content-exp">
							Included are HTML/CSS, JavaScript, ReactJs and NodeJs.
						</p>
						<h6>
							<em>Jan 2023 - Oct 2024</em>
						</h6>
					</section>
				</div>
				{/* Experience part */}
				<div className="experience">
					<h3 className="title-exp">EXPERIENCES</h3>
					<hr className="hr-experience" />
					<section className="section-exp">
						<h4 className="title-names-exp">Web Development</h4>
						<h5>Full-time - Endava VietNam</h5>
						<p className="content-exp">
							Provide tools where users can do their classification for Jenkins
							run (Including Build&Delivery and Test). Managing test suites,
							executing individual test cases, and capturing detailed execution
							data. This will help track the status, results, and performance of
							the tests while ensuring that the entire process is organized and
							efficient.
						</p>
						<h6>
							<em>Jan 2024 - present</em>
						</h6>
					</section>
					<hr className="hr-exp" />
					<section className="section-exp">
						<h4 className="title-names-exp">Build Graphical UI</h4>
						<h5>Full-time - Endava VietNam</h5>
						<p className="content-exp">
							GUI that allows for real-time monitoring and management of various
							system parameters, including counters, traffic data, and antenna
							coverage. This will enable users to easily track and analyze
							system performance, adjust configurations, and ensure optimal
							operation of the system.
						</p>
						<h6>
							<em>Oct 2023 - Dec 2023</em>
						</h6>
					</section>
					<hr className="hr-exp" />
					<section className="section-exp">
						<h4 className="title-names-exp">Telecommunication Application</h4>
						<h5>Full-time - Endava VietNam (previously DEK Technologies)</h5>
						<p className="content-exp">
							Develop new functions and maintenance the old functions in
							telecommunication application. Based on requirements, collaborate
							with teammates to plan, design, implement, test, and release new
							functions for telecommunication application.
						</p>
						<h6>
							<em>May 2021 - Sep 2023</em>
						</h6>
					</section>
					<hr className="hr-exp" />
					<section className="section-exp">
						<h4 className="title-names-exp">Telecommunication System</h4>
						<h5>Full-time - Endava VietNam (previously DEK Technologies)</h5>
						<p className="content-exp">
							Develop automation backup and restore function on complex
							telecommunication system. This function is used to backup the
							whole configurations of the system and adapt them to the newer
							version.
						</p>
						<h6>
							<em>Sep 2019 - Apr 2021</em>
						</h6>
					</section>
					<hr className="hr-exp" />
				</div>
				<div className="experience">
					<h3 className="title-exp">OTHER EXPERIENCES</h3>
					<hr className="hr-experience" />
					<section className="section-exp">
						<h4 className="title-names-exp">Data Entry</h4>
						<h5>Part-time - SHAREWORK JOINT STOCK COMPANY</h5>
						<p className="content-exp">
							Adding labels to videos and reducing long videos into short
							videos. Check the wording in the image and then enter it again.
						</p>
						<h6>
							<em>Apr 2019 - Nov 2019</em>
						</h6>
					</section>
					<hr className="hr-exp" />
					<section className="section-exp">
						<h4 className="title-names-exp">
							Wedding store management software
						</h4>
						<h5>Freelancer</h5>
						<p className="content-exp">
							Design, development and management software salaries for wedding
							store employees.
						</p>
						<h6>
							<em>JAN 2018 - Aug 2019</em>
						</h6>
					</section>
				</div>
				{/* Technical Skill part */}
				<div className="experience">
					<h3 className="title-exp">TECHNICAL SKILL</h3>
					<hr className="hr-experience" />
					<ul className="list-skills-exp">
						<li>Figma</li>
						<li>HTML / CSS</li>
						<li>JavaScripts</li>
						<li>ReactJS</li>
						<li>Python</li>
						<li>C++</li>
						<li>CI / CD</li>
						<li>System Test / FT / UT</li>
						<li>Linux / Git</li>
					</ul>
				</div>
			</div>
		</>
	);
};
