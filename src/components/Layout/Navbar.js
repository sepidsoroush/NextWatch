import { useEffect, useState } from "react";
import { useRouter } from "next/router";
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
  const [type, setType] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (Object.keys(router.query).length > 0 || router.route === "/") {
      setShowSearchbox(false);
      setType("");
    } else {
      setShowSearchbox(true);
      setType(router.route.slice(1));
    }
  }, [router]);

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
          {showSearchbox && (
            <div className={styles.searchbox}>
              <SearchBox type={type} />
              <FaTimes
                onClick={mobileSearchboxHandler}
                className={styles.icon}
              />
            </div>
          )}
          <div className={styles.links}>
            <Link href="/">Home</Link>
            <Link href="/movie">Movies</Link>
            <Link href="/series">TV series</Link>
            <Link href="/game">Games</Link>
            <Link href="/watchlist">Watchlist</Link>
          </div>
          <div className={styles.hamburger}>
            {type !== "" && !showSearchbox && (
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
      </nav>
    </>
  );
};
export default Navbar;
