import Image from "next/image";
import schedulePosts from "../assets/images/schedule-posts.webp";
import styles from "./Schedule.module.css";

export default function Schedule() {
	return (
		<section className={styles.section}>
			<h2 className={styles.schedule}>Schedule to social media.</h2>
			<Image
				src={schedulePosts}
				alt=""
				className={styles.schedulePosts}
			/>
			<p className={styles.optimize}>
				Optimize post timings to publish content at the perfect time for
				your audience.
			</p>
		</section>
	);
}
