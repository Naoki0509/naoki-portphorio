import styles from "../styles/Home.module.css";
import Link from "next/link";

export function Header() {
	return (
		<div class="bg-gray-200 w-full p-3 font-serif">
			<header className={styles.header}>
				<div>
					<ul class="inline-flex space-x-4">
						<li class="flex-1">
							<Link href="/">
								<a class="text-4xl">index</a>
							</Link>
						</li>
						<li class="flex-1">
							<Link href="/about">
								<a class="text-4xl">about</a>
							</Link>
						</li>
					</ul>
				</div>
			</header>
		</div>
	);
}
