import Image from "next/image";
import consistentSchedule from "../assets/images/consistent-schedule.webp";
import styles from "./Maintain.module.css";

export default function Maintain() {
	return (
		<section className={styles.section}>
			<h2 className={styles.maintain}>
				Maintain a consistent posting schedule.
			</h2>
			<Image
				src={consistentSchedule}
				alt=""
				className={styles.consistentSchedule}
			/>
		</section>
	);
}
