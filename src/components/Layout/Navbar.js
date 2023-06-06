import styles from "@/styles/Navabr.module.css";
import { Inter } from "next/font/google";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

const Navbar = () => {
  return (
    <nav className={`${inter.className} ${styles.navbar}`}>
      <div className={styles.container}>
        <h1>Movies Database</h1>
        <div className={styles.links}>
          <Link href="/">Home</Link>
          <Link href="/watchlist">Watch list</Link>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
