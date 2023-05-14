import { useMediaQuery } from "react-responsive";
import classes from "@/styles/Heading.module.css";
import { useRouter } from "next/router";
// import Lottie from "@/components/UI/Lottie";
import Lottie from "react-lottie-player";
import { useState, useEffect } from "react";

const Heading = (props) => {
	const [isMobile, setIsMobile] = useState(false);

	const checkForMobile = useMediaQuery({ query: `(max-width: 760px)` });

	useEffect(() => {
		setIsMobile(checkForMobile);
	}, [isMobile]);

	const { asPath } = useRouter();

	let desktopContent, mobileContent;

	mobileContent = (
		<article
			className={`ml-50 w-100 cf avenir tc bt bb tc mw8 center mt4 bg-white pa3 ${classes.headingContainer} `}
		>
			<div className={`fl w-30 w-50-ns`}>
				<Lottie
					loop
					play
					style={{ width: 100, height: 100 }}
					animationData={props.animationData}
				/>
			</div>
			<div className={`fl w-50 w-50-ns f3 ${classes.headingText}`}>
				<h2>{props.content}</h2>
			</div>
		</article>
	);

	switch (asPath) {
		case "/Skills":
		case "/Languages":
		case "/Education":
		case "/WorkExperience":
		case "/Portfolio":
			desktopContent = (
				<article
					className={`ml-50 w-100 cf avenir  tc mw8 center mt4 bg-white pa3 
					`}
				>
					<div className="w-100 center ">
						<div className={`fl w-50 w-50-ns pl7`}>
							<Lottie
								loop
								play
								animationData={props.animationData}
								style={{ width: 100, height: 100 }}
							/>
						</div>
						<div className={`fl w-50 w-50-ns f3 pr7 ${classes.headingText}`}>
							<h2>{props.content}</h2>
							<hr className="mw3 bb bw1 b--black-10" />
						</div>
					</div>
				</article>
			);
			break;

		default:
			desktopContent = (
				<article
					className={`ml-50 w-100 cf avenir bt bb tc mw8 center mt4 bg-white pa3 ${classes.headingContainer} `}
				>
					<div className="w-100 center ">
						<div className={`fl w-50 w-50-ns pl7`}>
							<Lottie
								loop
								play
								animationData={props.animationData}
								style={{ width: 100, height: 100 }}
							/>
						</div>
						<div className={`fl w-50 w-50-ns f3 pr7 ${classes.headingText}`}>
							<h2>{props.content}</h2>
						</div>
					</div>
				</article>
			);
	}

	return <>{isMobile ? mobileContent : desktopContent}</>;
};

export default Heading;
