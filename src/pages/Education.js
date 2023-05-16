import Link from "next/link";
import Heading from "@/components/UI/Heading";
import EducationItem from "@/components/functional/EducationItem";
import animationData from "@/media/lotties/Education.json";
import Head from "next/head";

const educationData = [
	{
		id: "q1",
		institution: "Richfield Graduate Institute of Technology",
		qualification: "BsC IT SAQA ID # 35954",
		dateFrom: "January 2019",
		dateTo: "December 2021",
		comments: ["Specialized in Systems Development", "8 Distinctions"],
	},
	{
		id: "q2",
		institution: "Udemy",
		qualification: "The Complete Web Developer in 2022: Zero to Mastery",
		dateFrom: "May 2022",
		dateTo: "August 2022",
		comments: [
			<Link
				style={{ textDecoration: "none", color: "#F1D6B0" }}
				href="https://ude.my/UC-1d4f7fd3-ec81-4317-b99d-5747cbcd16ac"
				target="_blank"
			>
				View Certificate
			</Link>,
		],
	},
	{
		id: "q3",
		institution: "MiTx Online",
		qualification:
			"6.00.2x Introduction to Computational Thinking and Data Science",
		dateFrom: "November 2018",
		dateTo: "December 2018",
		comments: [
			<Link
				style={{ textDecoration: "none", color: "#F1D6B0" }}
				href="https://courses.edx.org/certificates/fa03b6b8c0a04312945e938093948cd2"
				target="_blank"
			>
				View Certificate
			</Link>,
		],
	},
	{
		id: "q4",
		institution: "MiTx Online",
		qualification:
			"6.00.1x: Introduction to Computer Science and Programming Using Python",
		dateFrom: "August 2018",
		dateTo: "November 2018",
		comments: [
			<Link
				style={{ textDecoration: "none", color: "#F1D6B0" }}
				href="https://courses.edx.org/certificates/4a21f40f94dc4d5da93426422982fc1b"
				target="_blank"
			>
				View Certificate
			</Link>,
		],
	},
	{
		id: "q5",
		institution: "Lyttleton Manor High School",
		qualification: "National Senior Certificate",
		dateFrom: "January 2006",
		dateTo: "December 2010",
		comments: ["Achieved half colours for academics."],
	},
];

const mappedEducation = educationData.map((qualification) => {
	return (
		<EducationItem
			key={qualification.id}
			institution={qualification.institution}
			qualification={qualification.qualification}
			dateFrom={qualification.dateFrom}
			dateTo={qualification.dateTo}
			comments={qualification.comments}
		/>
	);
});

const Education = () => {
	return (
		<>
			<Head>
				<title>Anthony Kruger's Portfolio - Qualifications</title>
				<meta name="description" content="Anthony Kruger's Portfolio" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.png" />
			</Head>
			<Heading content="Qualifications" animationData={animationData} />
			{mappedEducation}
		</>
	);
};

export default Education;
