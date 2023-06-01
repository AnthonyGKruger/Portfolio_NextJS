import PortfolioItem from "@/components/functional/PortfolioItem";
import Heading from "@/components/UI/Heading";
import animationData from "@/media/lotties/Portfolio.json";
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
			<article>
				<Heading animationData={animationData} content="Portfolio" />
				<div className="cf ma2">{mappedPortfolioItems}</div>
			</article>
		</>
	);
};

export default Portfolio;
