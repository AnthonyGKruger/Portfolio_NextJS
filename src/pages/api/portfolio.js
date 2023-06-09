
import mumbiLogo from "@/media/mumbi-logo.png";
import dptsLogo from "@/media/DPTS.png";
import tlwLogo from "@/media/TLW-logo.jpg";
import starWarsLogo from "@/media/star-wars-logo.svg"

export default function handler(req, res) {
	res.status(200).json([
		{
			id: "p1",
			title: "Mumbi Trust Administrators",
			description: "NextJS application built using Tailwind CSS and Flowbite-React.",
			link: "https://mumbi.co.za",
			image: mumbiLogo,
		},
		{
			id: "p2",
			title: "Digital Payment Transformation Services",
			description: "Ecommerce app built using Wordpress and Woocommerce - (still under development.)",
			link: "https://dpts.co.za",
			image: dptsLogo,
		},
		{
			id: "p3",
			title: "Swapi E-commerce",
			description: "E-commerce app built using NextJs and Tailwind CSS and the Swapi API, currently still under development.",
			link: "https://swapi-ecommerce.vercel.app",
			image: starWarsLogo,
		},
		{
			id: "p4",
			title: "Fan Catalogue",
			description: "Fan Catalogue built using NextJs and Tailwind CSS.",
			link: "https://tlwfans.vercel.app",
			image: tlwLogo,
		},
	]);
}