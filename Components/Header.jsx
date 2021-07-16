import styles from "../styles/Home.module.css";
import Link from "next/link";

export function Header() {
	return (
		<div class="bg-gray-200 w-full p-3 font-serif">
			<header className={styles.header}>
				<div>
					<ul class="inline-flex space-x-36">
						<li class="flex-1">
							<Link href="/">
								<a class="text-4xl">Index</a>
							</Link>
						</li>
						<li class="flex-1">
							<Link href="/about">
								<a class="text-4xl">About</a>
							</Link>
						</li>
						<li class="flex-1">
							<Link href="/Blog">
								<a class="text-4xl">Blog</a>
							</Link>
						</li>
						<li class="flex-1">
							<Link href="/News">
								<a class="text-4xl">News</a>
							</Link>
						</li>
					</ul>
				</div>
			</header>
		</div>
	);
}
