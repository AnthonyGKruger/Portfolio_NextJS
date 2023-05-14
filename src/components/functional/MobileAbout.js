import classes from "@/styles/About.module.css";
import image from "@/media/AnthonyIllustrated.jpeg";
import Image from "next/image";

const MobileAbout = () => {
	return (
		<article
			className={
				"avenir mw6 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10 " +
				classes.mobile
			}
		>
			<div className="tc">
				<Image
					src={image}
					className="br-100 h3 w5 h5 dib shadow-1"
					title="Anthony Kruger"
					alt="Anthony Kruger"
				/>
				<h1 className={"f2 " + classes.headingText}>About Me</h1>
				<hr className="mw3 bb bw1 b--black-10" />
			</div>
			<p
				className={
					"lh-copy measure center tc f6 black-70 " + classes.paragraphText
				}
			>
				Hello! I'm an ambitious and determined individual with a Bachelor's
				degree in information technology. As a successful retail branch manager,
				I've honed my management and sales skills, which will be valuable to my
				future employer in information technology. I'm seeking a role that
				leverages my interaction skills, operational experience, and positive
				attitude. I'm highly motivated, a fast learner, and a collaborative team
				player who thrives in dynamic and fast-paced environments. When not
				coding, I'm exploring new technologies or enjoying my time with family and friends.
				I'm excited about the opportunities ahead and look forward to connecting
				with like-minded professionals.
			</p>
			
		</article>
	);
};

export default MobileAbout;
