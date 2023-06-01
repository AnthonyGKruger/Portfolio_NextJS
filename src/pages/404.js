import { useEffect, useState } from "react";
import Lottie from "react-lottie-player";
import { useMediaQuery } from "react-responsive";
import animationData from "@/media/lotties/404.json";

const Error = () => {
	const [isMobile, setIsMobile] = useState(false);

	const checkForMobile = useMediaQuery({ query: `(max-width: 760px)` });

	useEffect(() => {
		setIsMobile(checkForMobile);
	}, [isMobile]);

	const lottieDimensions = isMobile ? 300 : 500;

	return (
		<>
			<section className="vh-90 avenir">
				<div className="tc ph5 lh-copy ">
					<Lottie
						loop
						play
						style={{
							width: lottieDimensions,
							height: lottieDimensions,
							marginLeft: "auto",
							marginRight: "auto",
						}}
						animationData={animationData}
					/>
					<span className="tc f1-l fw1">
						Sorry, we can't find the page you are looking for.
					</span>
				</div>
				<p className="fw1 i tc mt4 mt5-l f4 f3-l">
					Try using the navigation above to find the page you are looking for.
				</p>
			</section>
		</>
	);
};

export default Error;
