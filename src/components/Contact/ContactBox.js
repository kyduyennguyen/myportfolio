import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import "../../styles/ContactBox.css";
import cover_contact from "../../materials/img/cover-contact.jpg";

export const ContactBox = () => {
	const form = useRef();

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [subject, setSubject] = useState("");
	const [message, setMessage] = useState("");

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs.init({
			publicKey: "gMZZOVZhlDWX7Isx5",
			// Do not allow headless browsers
			blockHeadless: true,
			blockList: {
				// Block the suspended emails
				list: ["foo@emailjs.com", "bar@emailjs.com"],
				// The variable contains the email address
				watchVariable: "user_email",
			},
			limitRate: {
				// Set the limit rate for the application
				id: "app",
				// Allow 1 request per 10s
				throttle: 10000,
			},
		});

		emailjs
			.sendForm("service_d69u2ur", "template_33fgvyv", form.current, {
				publicKey: "gMZZOVZhlDWX7Isx5",
			})
			.then(
				() => {
					console.log("SUCCESS!");
				},
				(error) => {
					console.log("FAILED...", error.text);
				}
			);

		setName("");
		setEmail("");
		setSubject("");
		setMessage("");
	};

	return (
		<section className="container-contact">
			{/* Cover image for  */}
			<img
				className="img-cover-contact "
				src={cover_contact}
				alt="Cover Contact"
			/>

			{/* Contact Frame Box */}
			<div className="contact-frame positioned">
				<h1 id="title-contact-frame">Contact Angelly</h1>
				<div className="content-contact-frame">
					<h4 className="title-by">BY EMAIL</h4>
					<p className="content-items">nguyendongkyduyen308@gmail.com</p>
				</div>
				<div className="content-contact-frame">
					<h4 className="title-by">BY SOCIAL</h4>
					<div id="social-contact-icons">
						<a
							className="items-icon-contact"
							href="https://www.facebook.com/chubbybear308/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<i className="fa-brands fa-square-facebook fa-2xl"></i>
						</a>
						<a
							className="items-icon-contact"
							href="https://www.instagram.com/_chubbyyy.bearrr.96_/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<i className="fa-brands fa-instagram fa-2xl"></i>
						</a>
						<a
							className="items-icon-contact"
							href="https://www.linkedin.com/in/duyen-dk-nguyen/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<i className="fa-brands fa-linkedin-in fa-2xl"></i>
						</a>
						<a
							className="items-icon-contact"
							href="https://github.com/kyduyennguyen/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<i className="fa-brands fa-github fa-2xl"></i>
						</a>
					</div>
				</div>
				<div className="content-contact-frame">
					<h4 className="title-by">BY FORM</h4>
					<p className="content-items">
						Use the contact form to send me a messages. I'll get back to you
						within 24 business hours.
					</p>
				</div>
				<div className="content-contact-frame">
					<h4 className="title-by">HOURS</h4>
					<p className="content-items">Mon - Fri, 9am - 6pm GMT+7</p>
				</div>
			</div>

			{/* Contact Form */}
			<div className="form-container">
				<form className="contact-form" ref={form} onSubmit={sendEmail}>
					<input
						className="input-text"
						type="text"
						required
						id="name"
						name="user_name"
						placeholder="Your Name"
						value={name}
						onChange={(e) => {
							setName(e.target.value);
						}}
						autoComplete="off"
					/>
					<br />
					<input
						className="input-text"
						type="email"
						required
						id="email"
						name="user_email"
						placeholder="Email Address"
						value={email}
						onChange={(e) => {
							setEmail(e.target.value);
						}}
						autoComplete="off"
					/>
					<br />
					<input
						className="input-text"
						type="text"
						required
						id="subject"
						name="user_subject"
						placeholder="Subject"
						value={subject}
						onChange={(e) => {
							setSubject(e.target.value);
						}}
						autoComplete="off"
					/>
					<br />

					<textarea
						className="input-mess"
						type="text"
						required
						id="message"
						name="user_message"
						placeholder="Your Message"
						value={message}
						onChange={(e) => {
							setMessage(e.target.value);
						}}
						autoComplete="off"
					/>
					<br />
					<button className="btn-send" type="submit">
						SEND YOUR MESSAGE
					</button>
				</form>
			</div>
		</section>
	);
};
