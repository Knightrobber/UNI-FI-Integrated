import Layout from "../components/layout";
import 'tailwindcss/tailwind.css';
import Firebase from 'firebase';
import config from './config';

//Firebase.initializeApp(config.firebase)
console.log("From app.js")

function MyApp({ Component, pageProps }) {

	
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
