import Create from "./components/Create";
import Maintain from "./components/Maintain";
import Manage from "./components/Manage";
import Schedule from "./components/Schedule";
import Social from "./components/Social";
import Write from "./components/Write";
import styles from "./Home.module.css";

export default function Home() {
	return (
		<main className={styles.main}>
			<Create />
			<Social />
			<Schedule />
			<Manage />
			<Maintain />
			<Write />
		</main>
	);
}
