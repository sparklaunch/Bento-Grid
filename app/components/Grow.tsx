import Image from "next/image";
import growFollowers from "../assets/images/grow-followers.webp";
import styles from "./Grow.module.css";

export default function Grow() {
	return (
		<section className={styles.section}>
			<Image
				src={growFollowers}
				alt=""
				className={styles.growFollowers}
			/>
			<h2 className={styles.grow}>
				Grow followers with non-stop content.
			</h2>
		</section>
	);
}
