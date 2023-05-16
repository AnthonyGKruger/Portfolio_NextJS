import { hasCookie, setCookie } from "cookies-next";
import { useState, useEffect } from "react";
import classes from "@/styles/CookieBanner.module.css";
import Link from "next/link";

const CookieBanner = (props) => {
	const [showConsent, setShowConsent] = useState(true);

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
			className={`center mw5 mw6-ns hidden ba mv4 bg-white pa2 br4 ${classes.container}`}
		>
			<h1 className={`f4 bg-near-black white mv0 pv2 ph3`}>
				Cookie Policy & Terms & Conditions
			</h1>
			<div className="pa3 bt">
				<p className={`f6 f5-ns lh-copy measure mv0`}>
					This website uses cookies to improve the UI and UX. By using my
					website you consent to all cookies & terms and conditions in
					accordance with our{" "}
					<Link href={"/PrivacyPolicy"}>Privacy Policy</Link>.
				</p>
			</div>
			<button
				className={`bg-green-500 py-2 px-8 rounded text-white`}
				onClick={() => acceptCookie()}
			>
				Accept
			</button>
		</article>
	);
};

export default CookieBanner;
