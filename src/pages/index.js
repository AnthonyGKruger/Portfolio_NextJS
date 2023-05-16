import Head from "next/head";
import { Inter } from "next/font/google";


import DesktopAbout from "@/components/functional/DesktopAbout";
import MobileAbout from "@/components/functional/MobileAbout";
import Skills from "@/pages/Skills";
import Education from "@/pages/Education";
import WorkExperience from "@/pages/WorkExperience";
import Languages from "@/pages/Languages";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<>
			<Head>
				<title>Anthony Kruger's Portfolio - About</title>
				<meta name="description" content="Anthony Kruger's Portfolio" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.png" />
			</Head>
			<DesktopAbout />
			<MobileAbout />
			<Skills />
			<Education />
      <WorkExperience/>
      <Languages/>
		</>
	);
}
