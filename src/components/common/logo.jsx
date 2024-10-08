import React, { useState } from "react";
import { Link } from "react-router-dom";

import INFO from "../../data/user";

import "./styles/logo.css";

const Logo = (props) => {
	let { width, link } = props;
	const [hovered, setHovered] = useState(false);

	if (link === undefined) {
		link = true;
	}

	const imageElement = (
		<img
			src={`${process.env.PUBLIC_URL}/${hovered ? "logo_wink.png" : "logo.png"}`}
			alt="logo"
			className="logo"
			width={width}
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
		/>
	);

	return (
		<React.Fragment>
			{link ? <Link to="/">{imageElement}</Link> : imageElement}
		</React.Fragment>
	);
};

export default Logo;
