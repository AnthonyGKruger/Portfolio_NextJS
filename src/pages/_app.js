import "tachyons";
import Header from "@/components/UI/Header";
import { useRouter } from "next/router";
import Footer from "@/components/UI/Footer";
import Banner from "@/components/UI/Banner";
import { Provider } from "react-redux";
import store from "@/store/index";
import Companies from "@/components/UI/Companies";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import CookieBanner from "@/components/UI/CookieBanner";
import Head from "next/head";
import { useState, useEffect } from "react";

export default function App({ Component, pageProps }) {
	const { asPath } = useRouter();
	const [title, setTitle] = useState("Anthony Kruger's Portfolio");

	useEffect(() => {
		if (asPath === "/") {
			setTitle(`Anthony Kruger's Portfolio - Home`);
		} else if (asPath === "/Skills") {
			setTitle(`Anthony Kruger's Portfolio - Skills`);
		} else if (asPath === "/404") {
			setTitle(`Anthony Kruger's Portfolio - Error`);
		} else if (asPath === "/ContactMe") {
			setTitle(`Anthony Kruger's Portfolio - Contact Us`);
		} else if (asPath === "/WorkExperience") {
			setTitle(`Anthony Kruger's Portfolio - Work Experience`);
		} else if (asPath === "/Education") {
			setTitle(`Anthony Kruger's Portfolio - Qualifications`);
		} else if (asPath === "/Languages") {
			setTitle(`Anthony Kruger's Portfolio - Languages`);
		} else if (asPath === "/ThankYou") {
			setTitle(`Anthony Kruger's Portfolio - Thank You`);
		}else if (asPath === "/Portfolio") {
			setTitle(`Anthony Kruger's Portfolio`);
		}else if (asPath === "/PrivacyPolicy") {
			setTitle(`Anthony Kruger's Portfolio - Privacy Policy`);
		}
	}, [title, asPath]);

	return (
		<>
			<Script
				strategy="lazyOnload"
				src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
			/>

			<Script strategy="lazyOnload">
				{`
				window.dataLayer = window.dataLayer || [];
				function gtag(){dataLayer.push(arguments);}
				gtag('js', new Date());
				gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
				page_path: window.location.pathname,
				});
		`}
			</Script>
			<Provider store={store}>
				<Head>
					<title>{title}</title>
					<meta name="description" content="Anthony Kruger's Portfolio" />
					<meta name="viewport" content="width=device-width, initial-scale=1" />
					<link rel="icon" href="/favicon.png" />
				</Head>
				<Header />
				{/* <Banner
				bgColor="bg-red"
				content="This website is currently being developed, some functionality may
					not work as expected!"
				textColor="white"
			/> */}
				<main className={asPath !== "/" ? "vh-auto mb5" : ""}>
					<Component {...pageProps} />
					<Analytics />
					<Companies />
				</main>
				<Footer />
				<CookieBanner />
			</Provider>
		</>
	);
}
