const INFO = {
	main: {
		title: "Daniel's Portfolio",
		name: "Daniel TG",
		email: "datregu@gmail.com",
		logo: "../logo.png",
	},

	socials: {
		twitter: "https://twitter.com/da_nielet",
		github: "https://github.com/datregu",
		linkedin: "https://linkedin.com/datregu",
		//instagram: "https://instagram.com/",
		//stackoverflow: "https://stackoverflow.com/",
		//facebook: "https://facebook.com/",
	},

	homepage: {
		title: "Web Developer. GIS Analyst. Coffee Drinker.",
		description: (
			<>
				With hands-on experience in web development and a background in GIS analysis, I've contributed to optimizing applications for both public and private sectors using React, Next.js, and Go. From refining web components to data structuring for infrastructure projects, my passion lies in building efficient, user-friendly solutions.
				<br/>
				<br/>
				Take a look at my previous works and let’s create something impactful together!
			</>
		),
	},


	about: {
		title: "Hey, I’m Daniel.",
		description: (
			<>
				You can call me Daniel or Dani, that's up to you.
				<br />
				<br />
				I'm a web developer with a serious love for coffee. Fresh out of a Higher Degree in Web Application Development, I've gained solid experience with cutting-edge technologies like React, Next.js, and Go. During my internship at AICRUMIT S.L., I worked on cool projects using tools like Docker and GitLab, boosting the team's efficiency.
				<br />
				<br />
				To cap off my studies, I launched KakeboApp, a web app for managing savings with a Japanese touch, built with Spring Boot and React. Check it out on my GitHub!
				<br />
				<br />
				I'm now seeking new opportunities to apply my skills, contribute to web solutions that not only work but truly stand out, and thrive in a challenging, growth-oriented environment. Looking for a developer to transform technical challenges into creative solutions? Feel free to reach out!
			</>
		),
	},

	articles: {
		title: "Behind the Code and Maps.",
		description:
			"Chronological collection of my long-form thoughts on programming, projects, cartography...",
	},

	projects: [
		{
			title: "kakeboApp",
			description:
				"A simple money budget planner using the Kakeko method. Build as a Full-Stack project with Spring Boot and React as the final project of my Higher Degree in Web Application Development.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/java/java.png",
			linkText: "View Project",
			link: "https://github.com/datregu/kakeboApp",
		},

		{
			title: "Simple RESTful API",
			description:
				"A basic RESTful API developed in Java using Spring Boot, JPA for persistence, and MySQL as the database. The API provides endpoints for basic CRUD (Create, Read, Update, Delete) operations on a specific data model.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/java/java.png",
			linkText: "View Project",
			link: "https://github.com",
		},
	],
};

export default INFO;
