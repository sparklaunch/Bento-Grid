import Create from "./components/Create";
import Social from "./components/Social";
import styles from "./Home.module.css";

export default function Home() {
	return (
		<main className={styles.main}>
			<Create />
			<Social />
		</main>
	);
}
