import Chart from "@/components/UI/Chart";

import Heading from "@/components/UI/Heading";

import animationData from "@/media/lotties/Skill.json"

const Skills = () => {

	// const animationData = "https://lottie.host/837884f9-914c-463f-9abd-b76fff2cdcd3/5O9PY5O9Tc.json"

	return (
		<>
			
			<Heading animationData={animationData} content="Skills" loop={true}/>
			<Chart />
		</>
	);
};

export default Skills;
