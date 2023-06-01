import Heading from "@/components/UI/Heading";
import WorkItem from "@/components/functional/WorkItem";
import animationData from "@/media/lotties/workExperience.json";
import { useEffect, useState } from "react";

const WorkExperience = () => {
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
			<Heading animationData={animationData} content="Work Experience" />
			{mappedWorkData}
		</>
	);
};

export default WorkExperience;
