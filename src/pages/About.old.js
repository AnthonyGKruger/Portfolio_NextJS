import DesktopAbout from "@/src/components/functional/DesktopAbout";
import Education from "@/src/components/functional/Education";
import Languages from "@/pages/Languages";
import MobileAbout from "@/src/components/functional/MobileAbout";
import Skills from "@/pages/Skills";
import WorkExperience from "@/pages/WorkExperience";

const About = () => {
	return (
		<>
			<DesktopAbout />
			<MobileAbout />
			<Skills />
			<Education />
			<WorkExperience />
			<Languages />
		</>
	);
};

export default About;
