import { useIsVisible } from "@/hooks/UseIsVisible";
import { useState, useRef, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import classes from "@/styles/Chart.module.css";
import ChartBar from "@/components/UI/ChartBar";

const Chart = () => {
	
	const ref = useRef();
	
	const isVisible = useIsVisible(ref);
	
	const [isMobile, setIsMobile] = useState(false);

	const checkForMobile = useMediaQuery({ query: `(max-width: 760px)` });

	useEffect(() => {
		setIsMobile(checkForMobile);
	}, [isMobile]);

	const jsLabel = isMobile ? "JS" : "JavaScript";

	const [skills, setSkills] = useState([
		{ label: "Reactjs", value: 0 },
		{ label: jsLabel, value: 0 },
		{ label: "HTML", value: 0 },
		{ label: "CSS", value: 0 },
		{ label: "PHP", value: 0 },
		{ label: "SQL", value: 0 },
		{ label: "Java", value: 0 },
		{ label: "Python", value: 0 },
	]);

	if (isVisible) {
		setTimeout(() => {
			setSkills([
				{ label: "Reactjs", value: 65 },
				{ label: jsLabel, value: 50 },
				{ label: "HTML", value: 40 },
				{ label: "CSS", value: 30 },
				{ label: "PHP", value: 45 },
				{ label: "SQL", value: 30 },
				{ label: "Java", value: 20 },
				{ label: "Python", value: 20 },
			]);
		}, 800);
	}
	
	const totalMaximum = 100;

	const dataPoints = skills.map((dataPoint) => (
		<ChartBar
			className="w-100"
			value={dataPoint.value}
			maxValue={totalMaximum}
			label={dataPoint.label}
			key={dataPoint.label}
		/>
	));

	return (
		<div
			ref={ref}
			id="chart"
			className={`${classes.chart} avenir mw8 center mt5`}
		>
			{[...dataPoints]}
		</div>
	);
};

export default Chart;
