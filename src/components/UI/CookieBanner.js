import { hasCookie, setCookie } from "cookies-next";
import { useState, useEffect } from "react";
import classes from "@/styles/CookieBanner.module.css";
import Link from "next/link";
import Lottie from "react-lottie-player";
import animationData from "@/media/lotties/Cookies.json";
import { useMediaQuery } from "react-responsive";

const CookieBanner = (props) => {
	const [showConsent, setShowConsent] = useState(true);
	const [isMobile, setIsMobile] = useState(false);

	const checkForMobile = useMediaQuery({ query: `(max-width: 760px)` });

	useEffect(() => {
		setIsMobile(checkForMobile);
	}, [isMobile]);

	useEffect(() => {
		setShowConsent(hasCookie("localConsent"));
	}, []);

	const acceptCookie = () => {
		setShowConsent(true);
		setCookie("localConsent", "true", {});
	};

	if (showConsent) {
		return null;
	}

	return (
		<article
			className={`avenir center  mw6-ns hidden ba mv4 bg-white pa2 br4 ${isMobile? "": "mw5"} ${classes.container} ${classes.border}`}
		>
			<div class="cf">
				<div class="fl w-10  ">
					<Lottie
						loop
						play
						animationData={animationData}
						style={{ width: 70, height: 70 }}
					/>
				</div>
				<div class="fl w-90 tc mt3  ">
					<h1 className={`f4 mv0 pv2 ph3 ${classes.heading}`}>
						Cookie Policy and Terms & Conditions
					</h1>
				</div>
			</div>
			<div className={`pa3 bt ${classes.border}`}>
				<p className={`f6 f5-ns lh-copy measure mv0`}>
					This website uses cookies to improve the UI and UX. By using my
					website you consent to all cookies & terms and conditions in
					accordance with our{" "}
					<Link className={`link ${classes.link}`} href={"/PrivacyPolicy"}>
						Privacy Policy.
					</Link>
				</p>
				<button
					className={`mt2 f6 grow br2 ph3 pv2 mb2 mr2 dib pointer ${classes.button}`}
					onClick={() => acceptCookie()}
				>
					Accept
				</button>
			</div>
		</article>
	);
};

export default CookieBanner;
