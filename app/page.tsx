import Create from "./components/Create";
import styles from "./Home.module.css";

export default function Home() {
	return (
		<main className={styles.main}>
			<Create />
		</main>
	);
}
