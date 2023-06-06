
import mumbiLogo from "@/media/mumbi-logo.png";
import dptsLogo from "@/media/DPTS.png";
import tlwLogo from "@/media/TLW-logo.jpg";

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
			title: "Fan Catalogue",
			description: "Fan Catalogue built using NextJs and Tailwind CSS.",
			link: "https://tlwfans.vercel.app",
			image: tlwLogo,
		},
	]);
}