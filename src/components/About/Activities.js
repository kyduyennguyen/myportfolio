import React from "react";

import "../../styles/Activities.css";

import WEB101xDNKN from "../../materials/certificates/FX227242SC_WEB101x_NDKD.pdf";
import FoundationOfUx from "../../materials/certificates/FoundationOfUX.pdf";
import StartTheUXProcess from "../../materials/certificates/StartTheUXProcess.pdf";
import BuildWireframes from "../../materials/certificates/BuildWireframesAndLowFidelityPrototypes.pdf";

export const Activities = () => {
	return (
		<>
			<div className="total-activities">
				{/* Certificates part */}
				<div className="activities">
					<h3 className="title-act">CERTIFICATES</h3>
					<hr className="hr-activities" />
					<section className="section-activities">
						<h4 className="title-names-act">
							<a
								className="link-certs"
								href={WEB101xDNKN}
								target="_blank"
								rel="noopener noreferrer"
							>
								Building Website
							</a>
						</h4>
						<p>
							FUNIX
							<br />
							Febuary, 2023
						</p>
					</section>
					<hr className="hr-act" />
					<section className="section-activities">
						<h4 className="title-names-act">
							<a
								className="link-certs"
								href={FoundationOfUx}
								target="_blank"
								rel="noopener noreferrer"
							>
								Foundation Of User Experience (UX) Design
							</a>
						</h4>
						<p>
							Google coursera
							<br />
							Mar 3, 2024
						</p>
					</section>
					<hr className="hr-act" />
					<section className="section-activities">
						<h4 className="title-names-act">
							<a
								className="link-certs"
								href={StartTheUXProcess}
								target="_blank"
								rel="noopener noreferrer"
							>
								Start the UX Design Process: Empathize, Define, and Ideate
							</a>
						</h4>
						<p>
							Google coursera
							<br />
							April 20, 2024
						</p>
					</section>
					<hr className="hr-act" />
					<section className="section-activities">
						<h4 className="title-names-act">
							<a
								className="link-certs"
								href={BuildWireframes}
								target="_blank"
								rel="noopener noreferrer"
							>
								Build Wireframes and Low-Fidelity Prototypes
							</a>
						</h4>
						<p>
							Google coursera
							<br />
							June 22, 2024
						</p>
					</section>
				</div>
				{/* Activities part */}
				<div className="activities">
					<h3 className="title-act">ACTIVITIES</h3>
					<hr className="hr-activities" />
					<section className="section-activities">
						<h4 className="title-names-act">
							Student Contest On Information Security 2018
						</h4>
						<p>Febuary 2023</p>
					</section>
					<hr className="hr-act" />
					<section className="section-activities">
						<h4 className="title-names-act">
							Member of Trade Union (DEK Technologies)
						</h4>
						<p>Mar 2020 - Jan 2023</p>
					</section>
				</div>
				{/* Languages Skill part */}
				<div className="activities">
					<h3 className="title-act">LANGUAGES SKILLS</h3>
					<hr className="hr-activities" />
					<ul className="list-skills-act">
						<li>
							<strong className="lang">English</strong> - Intermediate
							<br /> <em id="note-eng">(usually use in working)</em>
						</li>
						<li>
							<strong className="lang">Chinese</strong> - Basic Communicate
						</li>
						<li>
							<strong className="lang">Korean</strong> - Basic Communicate
						</li>
					</ul>
				</div>
				{/* Design Skill part */}
				<div className="experience">
					<h3 className="title-exp">DESIGN SKILLS</h3>
					<hr className="hr-experience" />
					<ul className="list-skills-exp">
						<li>UI/UX</li>
						<li>Typography</li>
						<li>Design Thinking</li>
						<li>Design Research</li>
						<li>Branding + Identity</li>
					</ul>
				</div>
			</div>
		</>
	);
};
