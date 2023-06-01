import DesktopAbout from "@/components/functional/DesktopAbout";
import MobileAbout from "@/components/functional/MobileAbout";
import Skills from "@/pages/Skills";
import Education from "@/pages/Education";
import WorkExperience from "@/pages/WorkExperience";
import Languages from "@/pages/Languages";


export default function Home() {
	return (
		<>
			<DesktopAbout />
			<MobileAbout />
			<Skills />
			<Education />
      <WorkExperience/>
      <Languages/>
		</>
	);
}
