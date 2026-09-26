import Image from "next/image";
import audienceGrowth from "../assets/images/audience-growth.webp";
import styles from "./Faster.module.css";

export default function Faster() {
	return (
		<section className={styles.section}>
			<h3 className={styles.greaterThan}>&gt;56%</h3>
			<p className={styles.faster}>faster audience growth</p>
			<Image
				src={audienceGrowth}
				alt=""
				className={styles.audienceGrowth}
			/>
		</section>
	);
}
