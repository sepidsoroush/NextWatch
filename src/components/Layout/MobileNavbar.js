import styles from "@/styles/MobileNavbar.module.css";
import Link from "next/link";
import { Inter } from "next/font/google";
import { FaTimes } from "react-icons/fa";

const inter = Inter({ subsets: ["latin"] });

const MobileNavbar = (props) => {
  return (
    <div
      className={`${inter.className} ${styles.mobileNav} ${
        props.status ? styles.openflex : styles.closedflex
      }`}
    >
      <FaTimes
        onClick={props.onShowMobileNav}
        className={styles.icon}
      ></FaTimes>
      <div className={styles.mobileLinks}>
        <Link onClick={props.onShowMobileNav} href="/">
          Home
        </Link>
        <Link onClick={props.onShowMobileNav} href="/movie">
          Movies
        </Link>
        <Link onClick={props.onShowMobileNav} href="/series">
          TV Series
        </Link>
        <Link onClick={props.onShowMobileNav} href="/game">
          Games
        </Link>
        <Link onClick={props.onShowMobileNav} href="/watchlist">
          Watchlist
        </Link>
      </div>
    </div>
  );
};

export default MobileNavbar;
