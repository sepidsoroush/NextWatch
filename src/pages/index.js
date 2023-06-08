import SearchBox from "@/components/UI/SearchBox";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.body}>
      <h1>Welcome to Movie Database</h1>
      <SearchBox type="" />
    </div>
  );
}
