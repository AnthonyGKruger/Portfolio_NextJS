// import AnthonyResume from "@/media/Anthony_Gordon_Kruger.pdf";
import classes from "@/styles/ResumeRequest.module.css";
// import Link from "next/link";
import { useRouter } from "next/router";
import { useMediaQuery } from "react-responsive";
import useDownloader from "react-use-downloader";
import {useState, useEffect} from "react"

const ResumeRequest = () => {
	const router = useRouter();

	const {download} = useDownloader();

	const [isMobile, setIsMobile] = useState(false);

	const checkForMobile = useMediaQuery({ query: `(max-width: 760px)` });

	useEffect(() => {
		setIsMobile(checkForMobile);
	}, [isMobile]);

	const saveFile = () => {
		download("/Anthony_Gordon_Kruger.pdf", "Anthony_Gordon_Kruger_Resume.pdf");
		router.push("/");
	};

	return (
		<div className={`${isMobile ? "ph1" : "ph4"} avenir`}>
			<h2 className={`f4 ${classes.text}`}>
				Want to skip through all of this? Download my resume below:
			</h2>
			{/* <a
				href={"@/media/Anthony_Gordon_Kruger.pdf"}
				download="Anthony_Gordon_Kruger_Resume"
			> */}
			<button
				className={`f6 grow br2 ph3 pv2 mb2 mr2 dib pointer input-reset ${classes.button}`}
				onClick={saveFile}
				// onClick={() => router.push("/")}
			>
				Download Resume
			</button>
			{/* </a> */}
		</div>
	);
};

export default ResumeRequest;
