import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "@/styles/Navabr.module.css";
import Sidebar from "./Sidebar";
import SearchBox from "../UI/SearchBox";
import Link from "next/link";
import { FaTimes } from "react-icons/fa";
import { Inter } from "next/font/google";
import MobileNavbar from "./MobileNavbar";
const inter = Inter({ subsets: ["latin"] });

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
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

  const sidebarHandler = () => {
    setShowSidebar(!showSidebar);
  };
  const mobileSearchboxHandler = () => {
    setShowSearchbox(!showSearchbox);
  };

  return (
    <>
      <Sidebar onShowSidebar={sidebarHandler} status={showSidebar} />
      <nav className={`${inter.className} ${styles.navbar}`}>
        <div className={styles.container}>
          <h1>MoviesDB</h1>
          <div className={styles.rightContainer}>
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
          </div>
          <MobileNavbar
            type={type}
            showSearchbox={showSearchbox}
            mobileSearchboxHandler={mobileSearchboxHandler}
            sidebarHandler={sidebarHandler}
          />
        </div>
      </nav>
    </>
  );
};
export default Navbar;
