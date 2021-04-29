import { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import fetch from "isomorphic-unfetch";
import { Accordion, AccordionTab } from "primereact/accordion";
import { Button } from "primereact/button";
import BottomNavigation from "../../components/bottom-navigation";
import Header from "../../components/header";
import styles from "../../styles/Projects.module.scss";
import Link from "next/link";
import { ROOT_URL } from "../../constants/config";

type Projects = {
	name: string;
	descriptions: string[];
	link?: string;
};

type ProjectsProps = InferGetStaticPropsType<typeof getStaticProps>;

export default function Projects(props: ProjectsProps) {
	const projects = props.projects;

	return (
		<div className={styles.page}>
			<Head>
				<title>J. Bae - Projects</title>
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
				<article className={styles.content}>
					<div className={styles.headline}>Projects</div>
					<div className={styles.description}>
						You can view few projects on GitHub.
					</div>
					<Accordion>
						{projects.map((project, i) => (
							<AccordionTab
								headerClassName={styles["accordion-tab-header"]}
								contentClassName={
									styles["accordion-tab-content"]
								}
								key={i}
								header={project.name}
							>
								<ul>
									{project.descriptions.map(
										(description, j) => (
											<li key={j}>{description}</li>
										)
									)}
								</ul>
								{project.link ? (
									<Link href={project.link}>
										<Button
											className={`p-button-text ${styles["more-button"]}`}
										>
											See Project
										</Button>
									</Link>
								) : (
									""
								)}
							</AccordionTab>
						))}
					</Accordion>
				</article>
				<BottomNavigation currentLink="projects" />
			</main>
		</div>
	);
}

export const getStaticProps = async () => {
	const res = await fetch(`${ROOT_URL}/projects`, {
		headers: {
			"x-api-key": process.env.AWS_API_KEY,
		},
	});
	const json = await res.json();
	let projects: Projects[];

	if (json) {
		projects = JSON.parse(json);
	}

	return {
		props: {
			projects,
		},
	};
};
