import classes from "@/styles/WorkItem.module.css";
import briefCaseImage from "@/media/job.svg";
import roleImage from "@/media/role.svg";
import calendarImage from "@/media/calendar.svg";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";
import { useEffect, useState } from "react";

const WorkItem = ({ company, role, summary, dateFrom, dateTo, comments }) => {
	const [isMobile, setIsMobile] = useState(false);

	const checkForMobile = useMediaQuery({ query: `(max-width: 760px)` });

	useEffect(() => {
		setIsMobile(checkForMobile);
	}, [isMobile]);

	const mappedComments = comments.map((comment) => {
		return (
			<div
				key={comment}
				className={`f6 grow br2 ph3 pv2 mb2 mr2 dib ${classes.comments}`}
			>
				{comment}
			</div>
		);
	});

	return (
		<div
			className={`center pl2 mt4 mb4 ${
				isMobile ? "w-90" : "w-70"
			} bl bw2 avenir ${classes.workItem}`}
		>
			<div className={`bb f3 b ${classes.company}`}>
				<Image
					style={{ width: "2rem", height: "2rem" }}
					src={briefCaseImage}
					alt="locations"
				/>
				{`  ${company}`}
			</div>

			<div className={`bb ${classes.detailsContainer}`}>
				<div className={`cf pt1 ${classes.details}`}>
					<div className="ph3 fl w-40 pv1">
						<Image
							style={{ width: "2rem", height: "2rem" }}
							src={roleImage}
							alt="Role"
						/>
						{`  Role: ${role}`}
					</div>
					<div className="ph2 fl w-25 pv3">
						<Image
							style={{ width: "1rem", height: "1rem" }}
							src={calendarImage}
							alt="calendar"
						/>
						{`  From: ${dateFrom}`}
					</div>
					<div className="ph2 fl w-25 pv3">
						<Image
							style={{ width: "1rem", height: "1rem" }}
							src={calendarImage}
							alt="calendar"
						/>
						{`  To: ${dateTo}`}
					</div>
				</div>
			</div>

			{summary && (
				<div className={`bb ${classes.detailsContainer}`}>
					<p>Details:</p>
					<p>{summary}</p>
				</div>
			)}

			<div className="pt3">{mappedComments}</div>
		</div>
	);
};

export default WorkItem;
