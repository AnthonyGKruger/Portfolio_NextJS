
import Image from "next/image";
import classes from "@/styles/About.module.css";
import image from "@/media/AnthonyIllustrated.jpeg";

const DesktopAbout = () => {
	return (
		<div
			className={`avenir dt mw8 center ph4 pv4 pv5-m pv6-ns ${classes.desktop}`}
		>
			<div className={`dtc v-top w-30`}>
				<Image
					src={image}
					alt="Anthony Kruger"
					className="w-100 h-100 mt4 db br-100 shadow-1"
				/>
			</div>
			<div className="dtc v-top pl5">
				<h1 id="about" className={"f2 tc " + classes.headingText}>
					About Me
				</h1>
				<hr className="mw3 bb bw1 b--black-10" />
				<p className={"lh-copy mv0 " + classes.paragraphText}>
					Hello! I'm an ambitious and determined individual with a Bachelor's
					degree in information technology. As a successful retail branch
					manager, I've honed my management and sales skills, which will be
					valuable to my future employer in information technology. I'm seeking
					a role that leverages my interaction skills, operational experience,
					and positive attitude. I'm highly motivated, a fast learner, and a
					collaborative team player who thrives in dynamic and fast-paced
					environments. When not coding, I'm exploring new technologies or
					enjoying my time with family and friends. I'm excited about the
					opportunities ahead and look forward to connecting with like-minded
					professionals.
				</p>
			</div>
		</div>
	);
};

export default DesktopAbout;
