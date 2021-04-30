import Link from "next/link";
import Links, { LinkValue } from "../../constants/links";
import styles from "./BottomNavigation.module.scss";

export type BottomNavigationProps = {
	currentLink: LinkValue;
};

export default function BottomNavigation(props: BottomNavigationProps) {
	return (
		<div className={styles["bottom-nav"]}>
			<ul>
				{Links.map((link) => (
					<li key={link.value}>
						<Link href={link.link}>
							<a
								className={`${styles.tab} ${
									props.currentLink === link.value
										? styles["active"]
										: ""
								}`}
							>
								{link.name}
							</a>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}
