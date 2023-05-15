import Chart from "@/components/UI/Chart";

import Heading from "@/components/UI/Heading";

import animationData from "@/media/lotties/Skill.json";
import Head from "next/head";

const Skills = () => {
	return (
		<>
			<Head>
				<title>Anthony Kruger's Portfolio</title>
				<meta name="description" content="Anthony Kruger's Portfolio" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.png" />
			</Head>
			<Heading animationData={animationData} content="Skills" loop={true} />
			<Chart />
		</>
	);
};

export default Skills;
