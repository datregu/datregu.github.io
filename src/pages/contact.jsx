import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/contact.css";

const Contact = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "contact");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Contact | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="contact" />
				<div className="content-wrapper">
					<div className="contact-logo-container">
						<div className="contact-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="contact-container">
						<div className="title contact-title">
							Let's Get in Touch: Ways to Connect with Me
						</div>

						<div className="subtitle contact-subtitle">
							Thanks for wanting to get in touch! I’m always happy to hear your feedback, questions, or
							suggestions. If you’ve got something specific in mind, feel free to drop me an email
							at&nbsp;
							<a href={`mailto:${INFO.main.email}`}>
								{INFO.main.email}
							</a>
							. I usually reply within 24 hours, but if I’m super busy, it might take a little longer. You
							can also use the contact form on my website — just fill it out, and I’ll get back to you as
							soon as I can. And if social media is more your thing, you can find me on Instagram at&nbsp;
							<a href={INFO.socials.instagram} target="_blank" rel="noreferrer">
								{INFO.socials.instagram}
							</a>
							. I post updates there and love chatting with followers, so don’t hesitate to reach out.
							Looking forward to hearing from you!
						</div>

					</div>

					<div className="socials-container">
						<div className="contact-socials">
							<Socials/>
						</div>
					</div>

					<div className="page-footer">
						<Footer/>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Contact;
