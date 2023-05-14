import { useState } from "react";
import classes from "@/styles/Banner.module.css";

const Banner = ({bgColor, textColor, content}) => {
	const [showBanner, setShowBanner] = useState(true);

	const showBannerHandler = () => {
		setShowBanner(!showBanner);
	};

	const bannerContent = (
		<div className={`w-100 pa3 ${bgColor} ${classes.banner}`}>
			<div className="tc">
				<span className={`avenir ${textColor}`}>
					{content}
				</span>

				<button
					className={`fr bw0 avenir b ${bgColor} ${textColor} ${classes.action}`}
					onClick={showBannerHandler}
				>
					X
				</button>
			</div>
		</div>
	);

	return showBanner && bannerContent;
};

export default Banner;
