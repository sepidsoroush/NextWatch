import styles from "@/styles/Home.module.css";
import SearchBox from "@/components/Search/SearchBox";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={`${styles.homePage} ${inter.className}`}>
      <section className={styles.hero}>
        <h2>Welcome</h2>
        <h3>Millions of movies, TV shows and game to discover. Explore now.</h3>
        <div className={styles.search}>
          <SearchBox type="" />
        </div>
      </section>
    </div>
  );
}
