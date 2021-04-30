import Link from "next/link";
import styles from "./Header.module.scss";

export default function Header() {
	return (
		<header className={styles.header}>
			<div className={styles["name-logo"]}>
				<Link href="/">
					<a>JBae</a>
				</Link>
			</div>
			<ul>
				<li>
					<Link href="/about">
						<a>ABOUT</a>
					</Link>
				</li>
				<li>
					<Link href="/">
						<a>BLOG</a>
					</Link>
				</li>
			</ul>
		</header>
	);
}
