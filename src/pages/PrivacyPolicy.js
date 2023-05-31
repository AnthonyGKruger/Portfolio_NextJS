import Image from "next/image";
import pic from "@/media/ezdev-logo.png";
import Lottie from "react-lottie-player";
import animationData from "@/media/lotties/key-lock.json";
import Heading from "@/components/UI/Heading";
const PrivacyPolicy = () => {
	return (
		<article className=" center avenir w-90">
			{/* <span className="f2 center">Privacy Policy & Terms and Conditions</span> */}
			<Heading
				animationData={animationData}
				content="Privacy Policy"
			/>
		
			<p className=" lh-copy center">
				This privacy policy applies to ezdev.solutions and explains how I use
				any personal information I collect about you when you use this website.
			</p>
			<span className=" lh-copy center">Topics:</span>
			<ul>
				<li>What information do I collect about you?</li>
				<li>How will I use the information about you?</li>
				<li>Access to your information and corrections</li>
				<li>Cookies</li>
				<li>Other websites</li>
				<li>Changes to my privacy policy</li>
				<li>How to contact me</li>
			</ul>
			<p className=" lh-copy center">What information do I collect about you?</p>
			<p className=" lh-copy center">
				I collect information about you when you complete a form on my website.
				The information you give me may include your name, company name and
				email address.
			</p>
			<p className=" lh-copy center">How will I use the information about you?</p>
			<p className=" lh-copy center">
				I collect information about you to gain better understanding of how
				users are using my website to better my personal development and to give
				the best user experience that I possibly can. If I am contacted by you
				through my website, I will use the information provided to do so
				accordingly.
			</p>
			<p className=" lh-copy center">I use your information to:</p>
			<ul>
				<li>Contact you if you have requested me to.</li>
				<li>Monitor site activity.</li>
			</ul>
			<p className=" lh-copy center">
				If you change your mind about being contacted in the future, please let
				us know.
			</p>
			<p className=" lh-copy center">Access to your information and corrections</p>
			<p className=" lh-copy center">
				You have the right to request a copy of the information that I hold
				about you if you have contacted me before. If you would like a copy of
				some or all of your personal information, please email me at
				anthony@ezdev.solutions
			</p>
			<p className=" lh-copy center">Cookies</p>
			<p className=" lh-copy center">
				I reserve the right to use cookies to give you the best experience on my
				website and to help improve the overall user experience. A cookie is a
				small file that is placed on your computer or mobile device when you
				visit a website. You can manage or delete cookies as you wish.
			</p>
			<p className=" lh-copy center">Other websites</p>
			<p className=" lh-copy center">
				My website may contain links to other websites. This privacy policy only
				applies to this website, so when you link to other websites you should
				read their own privacy policies.
			</p>
			<p className=" lh-copy center">Changes to my privacy policy</p>
			<p className=" lh-copy center">
				I keep my privacy policy under regular review and I will place any
				updates on this web page. This privacy policy was last updated on
				16/05/2023.
			</p>
			<p className=" lh-copy center">How to contact me</p>
			<p className=" lh-copy center">
				Please contact me if you have any questions about my privacy policy or
				the information I hold about you.
			</p>
			<p className=" lh-copy center">Email: anthony@ezdev.solutions</p>
		</article>
	);
};

export default PrivacyPolicy;
