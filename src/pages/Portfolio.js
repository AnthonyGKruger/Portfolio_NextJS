import PortfolioItem from "@/components/functional/PortfolioItem";
import Heading from "@/components/UI/Heading";
import mumbiLogo from "@/media/mumbi-logo.png";
import dptsLogo from "@/media/DPTS.png";
import animationData from "@/media/lotties/Portfolio.json";
import Head from "next/head";
import { useState, useEffect } from "react";

const Portfolio = () => {

	const [mappedPortfolioItems, setMappedPortfolioItems] = useState();

	const fetchPortfolioData = async () => {
		const response = await fetch("/api/portfolio");
		const data = await response.json();

		setMappedPortfolioItems(
			data.map((portfolioItem) => {
				return (
					<PortfolioItem
						key={portfolioItem.id}
						title={portfolioItem.title}
						description={portfolioItem.description}
						link={portfolioItem.link}
						image={portfolioItem.image}
					/>
				);
			})
		);
	};

	useEffect(() => {
		fetchPortfolioData();
	}, []);

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
				<div className="cf ma2">{mappedPortfolioItems}</div>
			</article>
		</>
	);
};

export default Portfolio;
