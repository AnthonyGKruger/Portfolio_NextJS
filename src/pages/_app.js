import "tachyons";
import Header from "@/components/UI/Header";
import { useRouter } from "next/router";
import Footer from "@/components/UI/Footer";
import Banner from "@/components/UI/Banner";
import { Provider } from 'react-redux';
import store from '@/store/index';
import Companies from "@/components/UI/Companies";

export default function App({ Component, pageProps }) {
	
	const { asPath } = useRouter();

	return (
		<Provider store={store}>
			<Header />
			<Banner
					bgColor="bg-red"
					content="This website is currently being developed, some functionality may
					not work as expected!"
					textColor="white"
				/>
			<main className={asPath !== "/" ? "vh-auto mb5" : ""}>
				<Component {...pageProps} />
				<Companies/>
			</main>
			<Footer/>
		</Provider>
	);
}
