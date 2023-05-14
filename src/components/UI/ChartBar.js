import classes from "@/styles/ChartBar.module.css";

const ChartBar = (props) => {
	const { maxValue, label, value } = props;

	let barFillHeight = "0%";

	if (maxValue > 0) {
		barFillHeight = Math.round((value / maxValue) * 100) + "%";
	}

	return (
		<div className={`${classes.chart_bar} mw2`}>
			<div className={classes.chart_bar__inner}>
				<div
					className={classes.chart_bar__fill}
					style={{ height: barFillHeight }}
				></div>
			</div>

			<div className={`${classes.chart_bar__label}`}>{label}</div>
		</div>
	);
};

export default ChartBar;
