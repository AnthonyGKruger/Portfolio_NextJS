import classes from "@/styles/Companies.module.css";
import digitalStreamLogo from "@/media/ds-logo.png";
import dptsLogo from "@/media/DPTS.png";
import mumbiTALogo from "@/media/mumbi-logo.png";
import mumbiFSLogo from "@/media/Mumbi_Financial_Services_Pty_Logo-removebg-preview.png";
import avLogo from "@/media/av-logo.png";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";
import { useState, useEffect } from "react";

const Companies = () => {

	const [isMobile, setIsMobile] = useState(false);

	const checkForMobile = useMediaQuery({ query: `(max-width: 760px)` })
	
	useEffect(() => {
		setIsMobile(checkForMobile)
	}, [isMobile]);

	const companies = [
		{ id: "c1", logo: digitalStreamLogo, name: "Digital Stream" },
		{ id: "c2", logo: dptsLogo, name: "DPTS" },
		{ id: "c3", logo: mumbiTALogo, name: "Mumbi Trust Administrators" },
		{ id: "c4", logo: mumbiFSLogo, name: "Mumbi Financial Services" },
		{ id: "c5", logo: avLogo, name: "Addventures" },
	];

	const mappedCompanies = companies.map((company) => {
		return (
			<div
				key={company.id}
				className={`fl tc  ${isMobile ? "w-100 pa4" : "w-20 pa4"}`}
			>
				<div className={classes.image_container}>
					<Image
						className={classes.image}
						src={company.logo}
						alt={`${company.name} logo`}
					/>
				</div>
			</div>
		);
	});

	return (
		<div className="cf avenir">
			<article className="h4 mt5 dt w-100">
				<div className="dtc v-mid tc ph3 ph4-l">
					<span className={`f1 fw6 tc ${classes.text} ${isMobile?"f2":"f1"}`}>
						Companies that I have worked with!
					</span>
				</div>
			</article>
			{mappedCompanies}
		</div>
	);
};

export default Companies;
