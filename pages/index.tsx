import React from "react";
import fetch from "isomorphic-unfetch";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Toast } from "primereact/toast";
import { Controller, useForm } from "react-hook-form";
import Header from "../components/header";
import BottomNavigation from "../components/bottom-navigation";
import styles from "../styles/Home.module.scss";
import {
	FADE_IN_BOTTOM_VARIANT,
	FADE_IN_TRANSITION,
} from "../animation/variants";
import FadeInView from "../components/animations/FadeInView";

function useHomeRouter() {
	const router = useRouter();

	const handleDownloadPdf = (e) => {
		e.preventDefault();
		router.push("/documents/resume.docx");
	};
	const handleProjects = (e) => {
		e.preventDefault();
		router.push("/projects");
	};
	const handleBooks = (e) => {
		e.preventDefault();
		router.push("/books");
	};

	return { handleDownloadPdf, handleProjects, handleBooks };
}

function useContactForm() {
	const networkToast = React.useRef<Toast>();
	const {
		control,
		handleSubmit: submitForm,
		reset,
		formState: { errors },
	} = useForm<ContactInputs>();

	const handleValidation = async (data: ContactInputs) => {
		reset({
			comments: "",
			email: "",
			name: "",
		});

		const res = await fetch("/api/contact", {
			body: JSON.stringify(data),
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
		});

		if (res.ok) {
			networkToast.current &&
				networkToast.current.show({
					severity: "success",
					summary: "Contact Form",
					detail:
						"We successfully received your message! I will get back to you within 3 business days!",
					life: 5000,
				});
		} else {
			networkToast.current &&
				networkToast.current.show({
					severity: "error",
					summary: "Contact Form",
					detail:
						"Something went wrong sending your message to my server... If the error persists, contact me through my email at jasperbae@gmail.com!",
					sticky: true,
				});
		}
	};
	const handleSubmit = submitForm(handleValidation);

	return {
		control,
		errors,
		handleSubmit,
		networkToast,
	};
}

type ContactInputs = {
	name: string;
	email: string;
	comments: string;
};

export default function Home() {
	const { handleDownloadPdf, handleProjects, handleBooks } = useHomeRouter();
	const { control, errors, handleSubmit, networkToast } = useContactForm();

	return (
		<div className={styles.page}>
			<Head>
				<title>J. Bae - Home</title>
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
				<article className={styles["content"]}>
					<FadeInView className={styles["section-container"]}>
						<div className={styles["section-left"]}>
							<div className={styles["block-left"]}>
								<div className={styles["welcome"]}>
									Hi.
									<br />
									<span
										className={styles["welcome-headline"]}
									>
										I'm <b>Jasper Bae</b>
									</span>
								</div>
								<div className={styles["welcome-subtitle"]}>
									Class of 2020, Rutgers - New Brunswick
								</div>
								<Button
									label="DOWNLOAD MY RESUME"
									icon="pi pi-download"
									className={`p-button-outlined ${styles["section-button"]}`}
									onClick={handleDownloadPdf}
								/>
							</div>
						</div>
						<div className={styles["section-right"]}>
							<div className={styles["image-container"]}>
								<Image
									className={styles["qualities-image"]}
									src="/images/profile-landscape.jpg"
									layout="fill"
									objectFit="cover"
									alt="My landscaped profile"
								/>
							</div>
						</div>
					</FadeInView>
					<FadeInView className={styles["section-container"]}>
						<div className={styles["section-left"]}>
							<div className={styles["block-left"]}>
								<span className={styles["qualities-headline"]}>
									A hands-on developer who tackles problems
									with new or existing stacks.
								</span>
								<Button
									label="VIEW MY PROJECTS"
									href="/projects"
									className={`p-button-outlined ${styles["section-button"]}`}
									onClick={handleProjects}
								/>
							</div>
						</div>
						<div className={styles["section-right"]}>
							<div className={styles["image-container"]}>
								<Image
									src="/images/qualities-a.jpg"
									layout="fill"
									objectFit="cover"
									className={styles["qualities-image"]}
									alt="Qualities A"
								/>
							</div>
						</div>
					</FadeInView>
					<FadeInView className={styles["section-container"]}>
						<div className={styles["section-left"]}>
							<div className={styles["block-left"]}>
								<span className={styles["qualities-headline"]}>
									Learning never stops for me.
								</span>
								<div
									className={styles["qualities-description"]}
								>
									From technology to character building, I try
									to have a learner's attitude and be humble.
									<br />
									<br />
									<i>
										"Humility is not thinking less of
										yourself, but thinking of yourself
										less." - C.S. Lewis
									</i>
								</div>
								<Button
									label="SEE MY BOOK LIST"
									href="/books"
									className={`p-button-outlined ${styles["section-button"]}`}
									onClick={handleBooks}
								/>
							</div>
						</div>
						<div className={styles["section-right"]}>
							<div className={styles["image-container"]}>
								<Image
									src="/images/qualities-b.jpg"
									layout="fill"
									objectFit="cover"
									className={styles["qualities-image"]}
									alt="Qualities B"
								/>
							</div>
						</div>
					</FadeInView>
					<FadeInView className={styles["section-container"]}>
						<div className={styles["section-left"]}>
							<div
								className={`${styles["block-left"]} ${styles["form-container"]}`}
							>
								<span className={styles["form-headline"]}>
									Feel free to contact me!
								</span>
								<div className="p-fluid">
									<div
										className={`p-field ${styles["form-field"]}`}
									>
										<label
											htmlFor="fullname"
											className={styles["form-label"]}
										>
											Full Name
										</label>
										<Controller
											name="name"
											control={control}
											defaultValue=""
											render={({ field }) => (
												<InputText
													id="fullname"
													type="text"
													placeholder="Full Name"
													className={
														styles["form-input"]
													}
													aria-describedby="fullname-help"
													{...field}
												/>
											)}
											rules={{ required: true }}
										/>
										{errors.name ? (
											<small
												id="fullname-help"
												className={`p-error p-d-block ${styles["form-error"]}`}
											>
												Please provide a username.
											</small>
										) : (
											""
										)}
									</div>
									<div
										className={`p-field ${styles["form-field"]}`}
									>
										<label
											htmlFor="email"
											className={styles["form-label"]}
										>
											Email
										</label>
										<Controller
											name="email"
											control={control}
											defaultValue=""
											render={({ field }) => (
												<InputText
													id="email"
													type="email"
													placeholder="Email"
													className={
														styles["form-input"]
													}
													aria-describedby="email-help"
													{...field}
												/>
											)}
											rules={{ required: true }}
										/>
										{errors.email ? (
											<small
												id="fullname-help"
												className={`p-error p-d-block ${styles["form-error"]}`}
											>
												Please provide a valid email.
											</small>
										) : (
											""
										)}
									</div>
									<div
										className={`p-field ${styles["form-field"]}`}
									>
										<label
											htmlFor="comments"
											className={styles["form-label"]}
										>
											Comments
										</label>
										<Controller
											name="comments"
											control={control}
											defaultValue=""
											render={({ field }) => (
												<InputTextarea
													id="comments"
													placeholder="Write your comments here!"
													className={
														styles["form-area"]
													}
													aria-describedby="comments-help"
													{...field}
												/>
											)}
											rules={{ required: true }}
										/>
										{errors.comments ? (
											<small
												id="comments-help"
												className={`p-error p-d-block ${styles["form-error"]}`}
											>
												Please provide a comment about
												hiring me or questions about me.
											</small>
										) : (
											""
										)}
									</div>
								</div>
								<Button
									label="SUBMIT"
									className={`p-button-outlined ${styles["section-button"]}`}
									onClick={handleSubmit}
								/>
							</div>
						</div>
						<div className={styles["section-right"]}>
							<div className={styles["image-container"]}>
								<Image
									src="/images/qualities-c.jpg"
									layout="fill"
									objectFit="cover"
									className={styles["qualities-image"]}
									alt="Qualities C"
								/>
							</div>
						</div>
					</FadeInView>
				</article>
				<footer className={styles.footer}>
					<span className={styles["footer-copyright"]}>
						Made with Coffee and Coffee Cake. All design and code by
						Jasper Bae.
					</span>
				</footer>
				<BottomNavigation currentLink="home" />
				<Toast ref={networkToast} />
			</main>
		</div>
	);
}
