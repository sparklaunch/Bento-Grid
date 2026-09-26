import Image from "next/image";
import aiContent from "../assets/images/ai-content.webp";
import styles from "./Write.module.css";

export default function Write() {
	return (
		<section className={styles.section}>
			<h2 className={styles.write}>Write your content using AI.</h2>
			<Image src={aiContent} alt="" className={styles.aiContent} />
		</section>
	);
}
