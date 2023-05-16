import PortfolioItem from "@/components/functional/PortfolioItem";
import Heading from "@/components/UI/Heading";
import mumbiLogo from "@/media/mumbi-logo.png";
import dptsLogo from "@/media/DPTS.png";
import animationData from "@/media/lotties/Portfolio.json";
import Head from "next/head";

const Portfolio = () => {
	const portfolioData = [
		{
			id: "p1",
			title: "Mumbi Trust Administrators",
			description: "SPA for Mumbi Trust Administrators.",
			link: "https://mumbi.ezdev.solutions",
			image: mumbiLogo,
		},
		{
			id: "p2",
			title: "Digital Payment Transformation Services",
			description: "SPA for DPTS with ecommerce.",
			link: "https://dpts.co.za",
			image: dptsLogo,
		},
	];

	const portfolioItems = portfolioData.map((portfolioItem) => {
		return (
			<PortfolioItem
				key={portfolioItem.id}
				title={portfolioItem.title}
				description={portfolioItem.description}
				link={portfolioItem.link}
				image={portfolioItem.image}
			/>
		);
	});
	return (
		<>
			<Head>
				<title>Anthony Kruger's Portfolio - Portfolio Page</title>
				<meta name="description" content="Anthony Kruger's Portfolio" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.png" />
			</Head>
			<article>
				<Heading animationData={animationData} content="Portfolio" />
				<div className="cf ma2">{portfolioItems}</div>
			</article>
		</>
	);
};

export default Portfolio;
