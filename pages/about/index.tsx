import Head from "next/head";
import { useRouter } from "next/router";
import { Button } from "primereact/button";
import FadeInView from "../../components/animations/FadeInView";
import BottomNavigation from "../../components/bottom-navigation";
import Header from "../../components/header";
import styles from "../../styles/About.module.scss";

function useAboutRouter() {
	const router = useRouter();

	const handleDownloadPdf = (e) => {
		e.preventDefault();
		router.push("/documents/resume.docx");
	};

	return { handleDownloadPdf };
}

export default function About() {
	const { handleDownloadPdf } = useAboutRouter();

	return (
		<div className={styles.page}>
			<Head>
				<title>J. Bae - About Me</title>
				<link rel="icon" href="/favicon.ico" />
				// Google Font API
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Libre+Franklin:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
					rel="stylesheet"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<main className={styles.main}>
				<Header />
				<FadeInView className={styles.content}>
					<div className={styles.headline}>About Me</div>
					<div className={styles.description}>
						My name is Jasper Bae. I'm a post-graduate student of
						Class of 2020 with Bachelors of Science in Computer
						Science 💻 and Finance 💰.
					</div>
					<div className={styles["divider-top"]} />
					<Button
						className={`p-button-text ${styles["download-button"]}`}
						onClick={handleDownloadPdf}
					>
						DOWNLOAD MY RESUME
					</Button>
					<div className={styles["divider-bottom"]} />
					<div className={styles.subheading}>Hobbies</div>
					<ul>
						<li>I love to bicycle and to hike.</li>
						<li>I love coffee and baking.</li>
						<li>Reading is my jam.</li>
					</ul>
				</FadeInView>
				<BottomNavigation currentLink="about" />
			</main>
		</div>
	);
}
