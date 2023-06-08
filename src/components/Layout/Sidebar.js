import styles from "@/styles/Sidebar.module.css";
import Link from "next/link";
import { Inter } from "next/font/google";
import { FaTimes } from "react-icons/fa";

const inter = Inter({ subsets: ["latin"] });

const Sidebar = (props) => {
  return (
    <div
      className={`${inter.className} ${styles.mobileNav} ${
        props.status ? styles.openflex : styles.closedflex
      }`}
    >
      <FaTimes onClick={props.onShowSidebar} className={styles.icon}></FaTimes>
      <div className={styles.mobileLinks}>
        <Link onClick={props.onShowSidebar} href="/">
          Home
        </Link>
        <Link onClick={props.onShowSidebar} href="/movie">
          Movies
        </Link>
        <Link onClick={props.onShowSidebar} href="/series">
          TV Series
        </Link>
        <Link onClick={props.onShowSidebar} href="/game">
          Games
        </Link>
        <Link onClick={props.onShowSidebar} href="/watchlist">
          Watchlist
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
