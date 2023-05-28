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

export default function App({ Component, pageProps }) {
	const { asPath } = useRouter();

	return (
		<Provider store={store}>
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
			<CookieBanner/>
		</Provider>
	);
}
