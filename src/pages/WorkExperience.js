import Heading from "@/components/UI/Heading";
import WorkItem from "@/components/functional/WorkItem";
import animationData from "@/media/lotties/workExperience.json";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const WorkExperience = () => {
	const { asPath } = useRouter();
	const [mappedWorkData, setMappedWorkData] = useState();

	const fetchWorkData = async () => {
		const response = await fetch("/api/workExperience");
		const data = await response.json();
		setMappedWorkData(data.map((job) => {
			return (
				<WorkItem
					key={job.id}
					company={job.company}
					role={job.role}
					summary={job.summary}
					dateFrom={job.dateFrom}
					dateTo={job.dateTo}
					comments={job.comments}
				/>
			);
		}));
	};

	useEffect(()=> {
		fetchWorkData();
	}, [])
	
	return (
		<>
			<Head>
				<title>
					Anthony Kruger's Portfolio -{" "}
					{asPath === "/" ? "About" : "Work Experience"}
				</title>
				<meta name="description" content="Anthony Kruger's Portfolio" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.png" />
			</Head>
			<Heading animationData={animationData} content="Work Experience" />
			{mappedWorkData}
		</>
	);
};

export default WorkExperience;
