import Head from "next/head";
import Image from "next/image";
import { Footer } from "../Components/Footer";
import { Header } from "../Components/Header";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>N's PortForio</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />

			<main className={styles.main}>
				<section>
					<div>
						<h1></h1>
					</div>
				</section>
			</main>
			<Footer />
		</div>
	);
}
