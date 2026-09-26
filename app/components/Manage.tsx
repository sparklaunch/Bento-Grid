import Image from "next/image";
import multiplePlatforms from "../assets/images/multiple-platforms.webp";
import styles from "./Manage.module.css";

export default function Manage() {
	return (
		<section className={styles.section}>
			<Image
				src={multiplePlatforms}
				alt=""
				className={styles.multiplePlatforms}
			/>
			<h2 className={styles.manage}>
				Manage multiple accounts and platforms.
			</h2>
		</section>
	);
}
