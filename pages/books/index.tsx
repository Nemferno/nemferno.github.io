import { InferGetStaticPropsType } from "next";
import Head from "next/head";
import FadeInView from "../../components/animations/FadeInView";
import BottomNavigation from "../../components/bottom-navigation";
import Header from "../../components/header";
import styles from "../../styles/Books.module.scss";
import fetch from "isomorphic-unfetch";
import { ROOT_URL } from "../../constants/config";

type Book = {
	title: string;
	author: string | string[];
};

type Collection = {
	_id: string;
	books: Book[];
};

type BooksProps = InferGetStaticPropsType<typeof getStaticProps>;

export default function Books(props: BooksProps) {
	const { collections } = props;

	return (
		<div className={styles.page}>
			<Head>
				<title>J. Bae - Book List</title>
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
					<div className={styles.headline}>My Book List</div>
					<div className={styles.description}>
						Here is some of the books I recommend to read in
						different areas of life.
					</div>
					{collections.map((collection, i) => (
						<>
							<div
								className={styles.subheading}
								key={`subheading-${i}`}
							>
								{collection._id}
							</div>
							<ul key={`books-${i}`}>
								{collection.books.map((book, j) => {
									let author = book.author;
									if (typeof author === "object") {
										if (author.length > 2) {
											author[author.length - 1] =
												"and " +
												author[author.length - 1];
											author = author.join(", ");
										} else {
											author = author.join(" and ");
										}
									}

									return (
										<li key={`books-${i}-${j}`}>
											<i>{book.title}</i> by {author}
										</li>
									);
								})}
							</ul>
						</>
					))}
				</FadeInView>
				<BottomNavigation currentLink="books" />
			</main>
		</div>
	);
}

export const getStaticProps = async () => {
	const res = await fetch(`${ROOT_URL}/books`, {
		headers: {
			"x-api-key": process.env.AWS_API_KEY,
		},
	});

	const json = await res.json();
	let collections: Collection[];

	try {
		if (typeof json === "string") {
			collections = JSON.parse(json);
		} else {
			collections = json;
		}

		return {
			props: {
				collections,
			},
		};
	} catch (error) {
		return {
			props: {
				collections: [
					{
						_id: error.message + "; " + JSON.stringify(json),
						books: [],
					},
				] as Collection[],
			},
		};
	}
};
