import Heading from "@/components/UI/Heading";
import classes from "@/styles/Languages.module.css";
import Lottie from "react-lottie-player";
import headingAnimationData from "@/media/lotties/Language.json";
import englishAnimationData from "@/media/lotties/EnglishFlag.json";
import afrikaansAnimationData from "@/media/lotties/SouthAfricanFlag.json";

const Languages = () => {
	return (
		<>
			<Heading animationData={headingAnimationData} content="Languages" />
			<article className="cf avenir w-50 center mt4">
				<div className="fl w-100 w-50-ns tc">
					<div className={`f4 ${classes.language}`}>
						<Lottie
							loop
							play
							animationData={englishAnimationData}
							style={{
								width: 100,
								height: 100,
								marginLeft: "auto",
								marginRight: "auto",
							}}
						/>
						English
					</div>
				</div>
				<div className="fl w-100 w-50-ns  tc">
					<div className={`f4 ${classes.language}`}>
						<Lottie
							loop
							play
							animationData={afrikaansAnimationData}
							style={{
								width: 100,
								height: 100,
								marginLeft: "auto",
								marginRight: "auto",
							}}
						/>
						Afrikaans
					</div>
				</div>
			</article>
		</>
	);
};

export default Languages;
