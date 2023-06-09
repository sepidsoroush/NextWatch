import styles from "@/styles/Navabr.module.css";
import Link from "next/link";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

const Navbar = () => {
  return (
    <nav className={`${inter.className} ${styles.navbar}`}>
      <div className={styles.container}>
        <Link href="/" className={styles.title}>
          MoviesDB
        </Link>
        <div className={styles.links}>
          <Link href="/">Home</Link>
          <Link href="/watchlist">Watchlist</Link>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
