import Heading from "@/components/UI/Heading";
import EducationItem from "@/components/functional/EducationItem";
import animationData from "@/media/lotties/Education.json";
import Head from "next/head";
import { useRouter } from "next/router";
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


	const { asPath } = useRouter();
	return (
		<>
			<Head>
				<title>
					Anthony Kruger's Portfolio -
					{asPath === "/" ? "About" : "Qualifications"}
				</title>
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
