import Lottie from "react-lottie-player";
import classes from "@/styles/ThankYou.module.css";
import { useMediaQuery } from "react-responsive";
import animationData from "@/media/lotties/ThankYou.json";
import { useState, useEffect } from "react";

const ThankYou = () => {

	const [isMobile, setIsMobile] = useState(false);
	const [isDesktop, setIsDesktop] = useState(false);

	const checkForMobile = useMediaQuery({ query: `(max-width: 760px)` });
	const checkForDesktop = useMediaQuery({ query: `(max-width: 1000px)`})

	useEffect(() => {
		setIsMobile(checkForMobile);
		setIsDesktop(checkForDesktop);
	}, [isMobile, isDesktop]);


	const lottieDimensions = isMobile? 300 : 400

	return (
		<>
		<Lottie
					loop
					play
					style={{ width: lottieDimensions, height: lottieDimensions, marginLeft: "auto", marginRight: "auto" }}
					animationData={animationData}
				/>
			
			<article className="tc ph4 avenir">
				<p
					className={`${isDesktop ? "f1" : "f2"} f2-m f1-l fw2  mv3 ${classes.text}`}
				>
					Awesome!
				</p>
				<p
					className={`${isDesktop ? "f3" : "f4"} f4-m f3-l fw2  mt0 lh-copy ${
						classes.text
					}`}
				>
					Thank you for contacting me, I will get back to you shortly...In the
					meantime, why not carry on looking around?.
				</p>
			</article>
		</>
	);
};

export default ThankYou;
