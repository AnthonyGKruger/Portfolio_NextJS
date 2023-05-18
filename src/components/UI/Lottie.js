const Lottie = ({ height, width, animationData, loop }) => {
	return (
		<lottie-player
			src={animationData}
			background="transparent"
			speed="1"
			style={{
				width: width,
				height: height,
				marginLeft: "auto",
				marginRight: "auto",
			}}
			loop
			autoplay
		></lottie-player>
	);
};

export default Lottie;

