import { useState } from "react";
import styles from "@/styles/Navabr.module.css";
import MobileNavbar from "./MobileNavbar";
import Link from "next/link";
import { BsBookmarkPlusFill } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

const Navbar = () => {
  const [mobileNav, setMobileNav] = useState(false);
  const mobileNavbarHandler = () => {
    setMobileNav(!mobileNav);
  };

  return (
    <>
      <MobileNavbar onShowMobileNav={mobileNavbarHandler} status={mobileNav} />
      <nav className={`${inter.className} ${styles.navbar}`}>
        <div className={styles.container}>
          <h1>Movies Database</h1>
          <div className={styles.links}>
            <Link href="/">Home</Link>
            <Link href="/movie">Movies</Link>
            <Link href="/series">TV series</Link>
            <Link href="/game">Games</Link>
            <Link href="/watchlist">Watchlist</Link>
          </div>
          <div className={styles.hamburger}>
            <Link href="/watchlist">
              <BsBookmarkPlusFill className={styles.watchlist} />
            </Link>
            <FaBars
              onClick={mobileNavbarHandler}
              className={styles.bars}
            ></FaBars>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
