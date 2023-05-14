
import logo from "@/media/ezdev-logo.png";
import classes from "@/styles/Footer.module.css";
import Image from "next/image";

const Footer = () => {
	return (
		<footer className="pa4 pa5-l black-70 bt b--black-10 avenir">
			<div className="mb4-l cf">
				<a href="/" className={classes.image}>
					<Image
						src={logo}
						alt="ez-dev logo"
						height={100}
						
					/>
				</a>
				<h1 className={`${classes.name} + tc mt2 mb0 fw1 f1`}>
					Anthony Gordon Kruger
				</h1>
			</div>

			<section className={`cf tc mb5`}>
				<div className="mb4 mb0-ns w-100 fr">
					<a
						className={`black-70 f3 f2-ns fw6 tl link dim dib pv3 mt2 mb4 mb0-l ${classes.email}`}
						href="mailto:hello@ezdev.solutions"
					>
						anthony@ezdev.solutions
					</a>
				</div>
	
			</section>
			<div className="dt dt--fixed w-100">
				<div className="dn dtc-ns v-mid">
					<p className="f7 black-70 dib pr3 mb3">
						© EZdev Solutions (PTY) LTD 2023
					</p>
				</div>
				<div className="db dtc-ns black-70 tc tr-ns v-mid">
					<a
						className="link hover-silver black-70 dib h2 w2 mr3"
						href="https://github.com/AnthonyGKruger"
						title="GitHub"
						target="_blank"
					>
						<svg
							fill="currentColor"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 16 16"
							fillRule="evenodd"
							clipRule="evenodd"
							strokeLinejoin="round"
							strokeMiterlimit="1.414"
						>
							<path d="M8 0C3.58 0 0 3.582 0 8c0 3.535 2.292 6.533 5.47 7.59.4.075.547-.172.547-.385 0-.19-.007-.693-.01-1.36-2.226.483-2.695-1.073-2.695-1.073-.364-.924-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.223 1.873.87 2.33.665.072-.517.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.953 0-.873.31-1.587.823-2.147-.083-.202-.358-1.015.077-2.117 0 0 .672-.215 2.2.82.638-.178 1.323-.266 2.003-.27.68.004 1.364.092 2.003.27 1.527-1.035 2.198-.82 2.198-.82.437 1.102.163 1.915.08 2.117.513.56.823 1.274.823 2.147 0 3.073-1.87 3.75-3.653 3.947.287.246.543.735.543 1.48 0 1.07-.01 1.933-.01 2.195 0 .215.144.463.55.385C13.71 14.53 16 11.534 16 8c0-4.418-3.582-8-8-8" />
						</svg>
					</a>
					<a
						href="https://www.linkedin.com/in/anthony-gordon-kruger-ezdev/"
						className="link dim dib black-70"
						target="_blank"
					>
						<svg className="db w2 h2" x="0px" y="0px" viewBox="0 0 48 48">
							<linearGradient
								gradientUnits="userSpaceOnUse"
								x1="23.9995"
								y1="0"
								x2="23.9995"
								y2="48.0005"
							>
								<stop offset="0"></stop>
								<stop offset="1"></stop>
							</linearGradient>
							<path
								fill="currentColor"
								d="M48,42c0,3.313-2.687,6-6,6H6c-3.313,0-6-2.687-6-6V6 c0-3.313,2.687-6,6-6h36c3.313,0,6,2.687,6,6V42z"
							></path>
							<g>
								<g>
									<path
										fill="#FFFFFF"
										d="M15.731,11.633c-1.608,0-2.658,1.083-2.625,2.527c-0.033,1.378,1.018,2.494,2.593,2.494 c1.641,0,2.691-1.116,2.691-2.494C18.357,12.716,17.339,11.633,15.731,11.633z M13.237,35.557h4.988V18.508h-4.988V35.557z M31.712,18.748c-1.595,0-3.222-0.329-4.956,2.36h-0.099l-0.087-2.599h-4.417c0.065,1.411,0.074,3.518,0.074,5.52v11.529h4.988 v-9.854c0-0.46,0.065-0.919,0.196-1.248c0.328-0.919,1.149-1.871,2.527-1.871c1.805,0,2.527,1.411,2.527,3.479v9.494h4.988V25.439 C37.455,20.713,34.993,18.748,31.712,18.748z"
									></path>
								</g>
							</g>
						</svg>
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
