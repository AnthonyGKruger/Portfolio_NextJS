
import mumbiLogo from "@/media/mumbi-logo.png";
import dptsLogo from "@/media/DPTS.png";


export default function handler(req, res) {
	res.status(200).json([
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
	]);
}