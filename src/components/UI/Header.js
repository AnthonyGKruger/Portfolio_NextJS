import { useMediaQuery } from "react-responsive";
import logo from "./../../media/ezdev-logo.png";
import classes from "@/styles/Header.module.css";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const Header = () => {
	
	const [isMobile, setIsMobile] = useState(false);

	const checkForMobile = useMediaQuery({ query: `(max-width: 760px)` });
	
	const { asPath } = useRouter();

	const linkClasses = `${classes.link} f6 f5-l link bg-animate black-80 dib pa3 ph4-l`;

	let navContent;

	useEffect(() => {
		setIsMobile(checkForMobile);
	}, [isMobile]);

	const defaultNavContent = (
		<nav className={"bt bb tc  center mt4 bg-white " + classes.nav}>
			<Link className={linkClasses} href="/">
				About
			</Link>
			<Link className={linkClasses} href="/Portfolio">
				Portfolio
			</Link>
			<Link className={linkClasses} href="/ContactMe">
				Contact
			</Link>
		</nav>
	);

	const aboutNavContent = (
		<nav className={"bt bb tc center mt4 bg-white " + classes.nav}>
			<Link className={linkClasses} href="/">
				About
			</Link>
			<Link className={linkClasses} href="/Skills">
				Skills
			</Link>
			<Link className={linkClasses} href="/WorkExperience">
				Work Experience
			</Link>
			<Link className={linkClasses} href="/Education">
				Qualifications
			</Link>
			<Link className={linkClasses} href="/Languages">
				Languages
			</Link>
			<Link className={linkClasses} href="/Portfolio">
				Portfolio
			</Link>
			<Link className={linkClasses} href="/ContactMe">
				Contact
			</Link>
		</nav>
	);

	switch (asPath) {
		case "/":
		case "/Skills":
		case "/Languages":
		case "/Education":
		case "/WorkExperience":
			navContent = aboutNavContent;
			break;

		default:
			navContent = defaultNavContent;
	}

	return (
		<>
			<Link href="/" className={classes.image}>
				<Image src={logo} alt="ez-dev logo" height={100} />
				{/* <Image src={logo} alt="ez-dev logo" height={100} layout="filled" /> */}
			</Link>
			<header className={"bg-white black-80 tc pv1 avenir " + classes.header}>
				<h1 className={`${classes.name} +  mt2 mb0 fw1 f1`}>
					Anthony Gordon Kruger
				</h1>
				<h2 className={`${classes.title} + mt2 mb0 f6 fw4 ttu tracked`}>
					Software developer and tech enthusiast
				</h2>
				{isMobile ? defaultNavContent : navContent}
			</header>
		</>
	);
};

export default Header;
