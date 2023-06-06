import styles from "@/styles/Footer.module.css";
import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

function Footer() {
  return (
    <footer className={`${styles.footer} ${inter.className}`}>
      <div className={styles.links}>
        <Link href="/#" className={styles.item}>
          About
        </Link>
        <Link href="/#" className={styles.item}>
          FAQs
        </Link>
        <Link href="/#" className={styles.item}>
          Contact Us
        </Link>
      </div>
      <div className={styles.copyright}>
        <span>
          Coded by &nbsp;
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/sepidsoroush"
          >
            Sepideh Soroush
          </a>
        </span>
        <span> | </span>
        <span className={styles.copyright}>
          The Movie Database by &nbsp;
          <a target="_blank" rel="noreferrer" href="https://www.omdbapi.com/">
            OMDB API
          </a>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
