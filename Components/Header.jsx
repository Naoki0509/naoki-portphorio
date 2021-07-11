import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export function Header() {
	return (
		<header className={styles.header}>
			<div className={styles.menuber}>
				<ul>
					<li>
						<Link href="/">
							<a>Home</a>
						</Link>
					</li>
					<li>
						<Link href="/about">
							<a>About</a>
						</Link>
					</li>
				</ul>
			</div>
		</header>
	);
}
