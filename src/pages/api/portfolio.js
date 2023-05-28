
import mumbiLogo from "@/media/mumbi-logo.png";
import dptsLogo from "@/media/DPTS.png";


export default function handler(req, res) {
	res.status(200).json([
		{
			id: "p1",
			title: "Mumbi Trust Administrators",
			description: "NextJS application built using tailwind css and flowbite-react.",
			link: "https://mumbi-trust-administrators.vercel.app",
			image: mumbiLogo,
		},
		{
			id: "p2",
			title: "Digital Payment Transformation Services",
			description: "Ecommerce app built using Wordpress and Woocommerce - (still under development.)",
			link: "https://dpts.co.za",
			image: dptsLogo,
		},
	]);
}