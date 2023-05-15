import Chart from "@/components/UI/Chart";

import Heading from "@/components/UI/Heading";

import animationData from "@/media/lotties/Skill.json"

const Skills = () => {

	return (
		<>
			<Heading animationData={animationData} content="Skills" loop={true}/>
			<Chart />
		</>
	);
};

export default Skills;
