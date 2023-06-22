import Layout from '@/components/layout';
import { AppWrapper } from '@/context/AppWrapper';

import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
	return (
		<AppWrapper>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</AppWrapper>
	);
}
