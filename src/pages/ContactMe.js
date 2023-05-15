import emailjs from "@emailjs/browser";
import { useRef, useState, useEffect } from "react";
import Lottie from "react-lottie-player";
import Banner from "@/components/UI/Banner";
import classes from "@/styles/ContactMe.module.css";
import { useMediaQuery } from "react-responsive";
import Loader from "@/components/UI/Loader";
import ResumeRequest from "@/components/UI/ResumeRequest";
import { useDispatch, useSelector } from "react-redux";
import { contactMeActions } from "@/store/contactMe-slice";
import { useRouter } from "next/router";
import animationData from "@/media/lotties/ContactMe.json";
import Head from "next/head";

const ContactMe = () => {
	const router = useRouter();
	const dispatch = useDispatch();
	const contactFormState = useSelector((state) => state.contactMe);

	const form = useRef();

	const [isMobile, setIsMobile] = useState(false);

	// const checkForMobile = useMediaQuery({ query: `(max-width: 500px)` });
	const checkForMobile = useMediaQuery({ query: `(max-width: 768px)` });

	useEffect(() => {
		setIsMobile(checkForMobile);
	}, [isMobile]);

	const lottieDimensions = isMobile ? 300 : 400;

	const onSubmitHandler = (event) => {
		event.preventDefault();

		dispatch(contactMeActions.errorHandler({ isError: false }));

		const formData = {
			from_name: form.current.from_name.value,
			company: form.current.company.value,
			comments: form.current.comments.value,
			reply_to: form.current.reply_to.value,
		};

		if (
			!contactFormState.formHasErrors &&
			contactFormState.from_name &&
			contactFormState.reply_to
		) {
			dispatch(
				contactMeActions.mailIsSendingStateHandler({ isMailSending: true })
			);

			emailjs
				.send(
					"ezdev_smtp_service",
					"ezdev_contact_me",
					formData,
					process.env.EMAIL_JS_SECURE_TOKEN
				)
				.then(
					(result) => {
						console.log(result.text);
						dispatch(
							contactMeActions.mailIsSendingStateHandler({
								isMailSending: false,
							})
						);
						router.push("/ThankYou");
					},
					(error) => {
						dispatch(contactMeActions.errorHandler({ isError: true }));
						console.log(error.text);
						dispatch(
							contactMeActions.mailIsSendingStateHandler({
								isMailSending: false,
							})
						);
					}
				);
		} else if (
			contactFormState.from_name === "" ||
			contactFormState.inputHasError.nameHasError ||
			contactFormState.reply_to === "" ||
			contactFormState.inputHasError.emailHasError
		) {
			dispatch(contactMeActions.formErrorHandler({ formHasErrors: true }));
		} else {
			dispatch(contactMeActions.formErrorHandler({ formHasErrors: true }));
		}
	};

	const inputChangeHandler = (event) => {
		dispatch(
			contactMeActions.inputChangeHandler({
				value: event.target.value,
				name: event.target.name,
			})
		);
	};

	return (
		<>
			<Head>
				<title>Anthony Kruger's Portfolio</title>
				<meta name="description" content="Anthony Kruger's Portfolio" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.png" />
			</Head>
			{contactFormState.error && (
				<Banner
					bgColor="bg-light-red"
					textColor="white"
					content="An error occurred, please try again."
				/>
			)}
			{contactFormState.formHasErrors && (
				<Banner
					bgColor="bg-light-red"
					textColor="white"
					content="There is an issue with your forms input fields, please check whether all fields are valid.."
				/>
			)}
			<div
				// className={`dt center pv5-m pv3-ns w-75 ph3" `}
				className={` center pv5-m pv3-ns ${isMobile ? " ph3" : "w-100 dt"}`}
			>
				<div className={`db  ${isMobile ? "w-100" : "w-50 v-mid-ns dtc-ns"}`}>
					<Lottie
						loop
						play
						style={{
							width: lottieDimensions,
							height: lottieDimensions,
							marginLeft: "auto",
							marginRight: "auto",
						}}
						animationData={animationData}
					/>
				</div>
				<div
					className={`db  v-mid ph2 pr0-ns pl3-ns ${
						isMobile ? "w-100" : "w-90 center dtc-ns"
					}`}
				>
					<article
						className={`${
							isMobile ? "pa1 center" : "pa4"
						} lh-copy black-80 avenir`}
					>
						<form
							ref={form}
							method="POST"
							onSubmit={onSubmitHandler}
							acceptCharset="utf-8"
						>
							<fieldset id="contact_me" className="ba b--transparent ph0 mh0">
								<legend className="ph0 mh0 fw6 clip">Contact Me</legend>

								<div className="mt3">
									<label
										className={`db fw4 lh-copy f6 ${classes.text}`}
										htmlFor="name"
									>
										Name
									</label>

									<input
										// value={contactFormState.from_name}
										className={`pa2 input-reset ba br2 w-100   ${
											contactFormState.inputHasError.nameHasError
												? classes.inputError
												: classes.input
										}`}
										type="text"
										name="from_name"
										id="name"
										onChange={inputChangeHandler}
									/>
								</div>

								<div className="mt3">
									<label
										className={`db fw4 lh-copy f6 ${classes.text}`}
										htmlFor="email"
									>
										Email address
									</label>

									<input
										value={contactFormState.reply_to || ""}
										className={`pa2 input-reset ba br2 w-100  ${
											contactFormState.inputHasError.emailHasError
												? classes.inputError
												: classes.input
										}`}
										type="email"
										name="reply_to"
										id="email"
										onChange={inputChangeHandler}
									/>
								</div>

								<div className="mt3">
									<label
										className={`db fw4 lh-copy f6 ${classes.text}`}
										htmlFor="company"
									>
										Company <span className="normal black-60">(optional)</span>
									</label>

									<input
										value={contactFormState.company || ""}
										className={`pa2 input-reset ba br2 w-100   ${
											contactFormState.inputHasError.companyHasError
												? classes.inputError
												: classes.input
										}`}
										type="text"
										name="company"
										id="company"
										onChange={inputChangeHandler}
									/>
								</div>

								<div>
									<label
										htmlFor="comment"
										className={`f6 db mt2 ${classes.text}`}
									>
										Comments <span className="normal black-60">(optional)</span>
									</label>
									<textarea
										value={contactFormState.comments || ""}
										id="comments"
										name="comments"
										className={`pa2 input-reset ba br2 w-100  db border-box hover-black ba mb2 ${
											contactFormState.inputHasError.commentsHasError
												? classes.inputError
												: classes.input
										}`}
										aria-describedby="comment-desc"
										onChange={inputChangeHandler}
									></textarea>
									<small id="comment-desc" className="f6 black-60"></small>
								</div>
							</fieldset>

							{!contactFormState.mailSending && (
								<div className="mt3">
									<input
										className={`f6 grow br2 ph3 pv2 mb2 mr2 dib pointer input-reset ${classes.button}`}
										type="submit"
										value="Send"
									/>
								</div>
							)}

							{contactFormState.mailSending && <Loader />}
						</form>
					</article>
					<ResumeRequest />
				</div>
			</div>
		</>
	);
};

export default ContactMe;
