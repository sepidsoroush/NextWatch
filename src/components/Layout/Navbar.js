import { useState } from "react";
import styles from "@/styles/Navabr.module.css";
import MobileNavbar from "./MobileNavbar";
import SearchBox from "../UI/SearchBox";
import Link from "next/link";
import { FaBars, FaSearch, FaTimes } from "react-icons/fa";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

const Navbar = () => {
  const [mobileNav, setMobileNav] = useState(false);
  const [showSearchbox, setShowSearchbox] = useState(false);

  const mobileNavbarHandler = () => {
    setMobileNav(!mobileNav);
  };

  const mobileSearchboxHandler = () => {
    setShowSearchbox(!showSearchbox);
  };

  return (
    <>
      <MobileNavbar onShowMobileNav={mobileNavbarHandler} status={mobileNav} />
      <nav className={`${inter.className} ${styles.navbar}`}>
        <div className={styles.container}>
          <h1>MoviesDB</h1>
          <div className={styles.links}>
            <Link href="/">Home</Link>
            <Link href="/movie">Movies</Link>
            <Link href="/series">TV series</Link>
            <Link href="/game">Games</Link>
            <Link href="/watchlist">Watchlist</Link>
          </div>
          <div className={styles.hamburger}>
            {!showSearchbox && (
              <FaSearch
                onClick={mobileSearchboxHandler}
                className={styles.icon}
              />
            )}
            <FaBars
              onClick={mobileNavbarHandler}
              className={styles.icon}
            ></FaBars>
          </div>
        </div>
        {showSearchbox && (
          <div className={`${styles.container} ${styles.searchbox}`}>
            <SearchBox />
            <FaTimes onClick={mobileSearchboxHandler} className={styles.icon} />
          </div>
        )}
      </nav>
    </>
  );
};
export default Navbar;
