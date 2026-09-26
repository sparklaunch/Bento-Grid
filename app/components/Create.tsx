import Image from "next/image";
import createPost from "../assets/images/create-post.webp";
import styles from "./Create.module.css";

export default function Create() {
	return (
		<section className={styles.section}>
			<h2 className={styles.create}>
				Create and schedule content
				<span className={styles.quicker}>quicker.</span>
			</h2>
			<Image src={createPost} alt="" className={styles.createPost} />
		</section>
	);
}
