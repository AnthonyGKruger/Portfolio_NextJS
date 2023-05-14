import Image from "next/image";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";
import classes from "@/styles/PortfolioItem.module.css";

const PortfolioItem = ({ title, link, image, description }) => {
	const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
	const isTablet = useMediaQuery({ query: `(max-width: 1000px)` });
	const isLargeDesktop = useMediaQuery({ query: `(min-width: 1200px)` });

	const largeDesktopClasses = `${classes.largeDesktop} w-33 ma2 pa3`;
	const desktopClasses = `${classes.desktop} w-33 ma2 pa3`;
	const tabletClasses = `${classes.tablet} w-33 ma2 pa2`;
	const mobileClasses = "h-auto w-100 mb3 ";

	return (
		<div
			className={`fl outline black-30 avenir ${
				// isMobile ? mobileClasses : desktopClasses
				isTablet
					? isMobile
						? mobileClasses
						: tabletClasses
					: isLargeDesktop
					? largeDesktopClasses
					: desktopClasses
			}`}
		>
			{/* <div className="fl vh-25-l vh-30 vh-25-m w-25-m w-20-l pa3 outline black-30 ma2">  */}
			<Link
				href={link}
				className={`db link dim tc  ${isMobile ? "mt3" : "mt1"}`}
				target="_blank"
			>
				<Image
					src={image}
					alt={title}
					className="center db black-10"
					style={{ width: "70%", height: "70%" }}
				/>
				<dl className="mt2 f6 lh-copy">
					<dt className="clip">Title</dt>
					<dd className="ml0 black truncate w-100">{title}</dd>
					<dt className="clip">Description</dt>
					<dd className="ml0 gray truncate w-100">{description}</dd>
				</dl>
			</Link>
		</div>
	);
};

export default PortfolioItem;
