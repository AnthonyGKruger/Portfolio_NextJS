import Heading from "@/components/UI/Heading";
import EducationItem from "@/components/functional/EducationItem";
import animationData from "@/media/lotties/Education.json";
import { useEffect, useState } from "react";

const Education = () => {
	const [mappedEducation, setMappedEducation] = useState();

	const fetchEducationData = async () => {
		const response = await fetch("/api/education");
		const data = await response.json();
		setMappedEducation(
			data.map((qualification) => {
				if (qualification.link) {
					return (
						<EducationItem
							key={qualification.id}
							institution={qualification.institution}
							qualification={qualification.qualification}
							dateFrom={qualification.dateFrom}
							dateTo={qualification.dateTo}
							comments={qualification.comments}
							link={qualification.link}
						/>
					);
				} else {
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
				}
			})
		);
	};

	useEffect(() => {
		fetchEducationData();
	}, []);

	return (
		<>
			<Heading content="Qualifications" animationData={animationData} />
			{mappedEducation}
		</>
	);
};

export default Education;
