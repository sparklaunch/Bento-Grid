import Image from "next/image";
import fiveStars from "../assets/images/five-stars.webp";
import styles from "./Social.module.css";

export default function Social() {
	return (
		<section className={styles.section}>
			<h2 className={styles.social}>
				Social Media<span className={styles.times}>10x</span>
				<span className={styles.faster}>Faster</span>with AI
			</h2>
			<Image src={fiveStars} alt="" className={styles.fiveStars} />
			<p className={styles.reviews}>Over 4,000 5-star reviews</p>
		</section>
	);
}
