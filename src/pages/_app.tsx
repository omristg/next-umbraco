import Layout from "@/Components/layout";
import Providers from "@/global/providers";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Providers>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</Providers>
	);
}
