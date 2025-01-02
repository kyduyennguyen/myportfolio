import React from "react";
import { Link } from "react-router-dom";

import "../../styles/ConnectContact.css";

export const ConnectContact = () => {
	return (
		<>
			<div className="connect-contact">
				<div className="connect conn-cont">
					<h3>CONNECT</h3>
					<ul>
						<li>
							<a
								className="list-conn-cont"
								href="https://www.facebook.com/chubbybear308/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<i className="fa-brands fa-square-facebook fa-lg"></i> Facebook
							</a>
						</li>
						<li>
							<a
								className="list-conn-cont"
								href="https://www.instagram.com/_chubbyyy.bearrr.96_/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<i className="fa-brands fa-square-instagram fa-lg"></i>{" "}
								Instagram
							</a>
						</li>
						<li>
							<a
								className="list-conn-cont"
								href="https://www.linkedin.com/in/duyen-dk-nguyen/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<i className="fa-brands fa-linkedin fa-lg"></i> LinkedIn
							</a>
						</li>
						<li>
							<a
								className="list-conn-cont"
								href="https://github.com/kyduyennguyen/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<i className="fa-brands fa-square-github fa-lg"></i> Github
							</a>
						</li>
					</ul>
				</div>
				<div className="contact conn-cont">
					<h3>CONTACT</h3>
					<ul>
						<li>
							<i class="fa-solid fa-phone fa-lg"></i> 0963.236.457
						</li>
						<li>
							<i class="fa-solid fa-envelope fa-lg"></i>{" "}
							nguyendongkyduyen308@gmail.com
						</li>
					</ul>
				</div>
				<div className="btn-contact">
					<Link to="/contact">
						<button type="button">GET IN TOUCH</button>
					</Link>
				</div>
			</div>
		</>
	);
};
