import { useContext } from "react";
import { AppContext } from "@/context/app-context";
import styles from "@/styles/Watchlist.module.css";
import Link from "next/link";
import Card from "@/components/Movies/Card";
import { FaArrowLeft } from "react-icons/fa";
import { BsBookmarkPlusFill } from "react-icons/bs";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const Watchlist = () => {
  const { watchlist } = useContext(AppContext);
  console.log(watchlist);

  return (
    <div className={`${styles.body} ${inter.className}`}>
      {watchlist.length > 0 ? (
        <ul className={styles.grid}>
          {watchlist.map((item) => (
            <li key={item.imdbID}>
              <Card info={item} />
            </li>
          ))}
        </ul>
      ) : (
        <div className={styles.empty}>
          <BsBookmarkPlusFill className={styles.bookmark} />
          <p>Your Watchlist is empty</p>
          <p>
            Add movies and shows to your Watchlist to keep track of what you
            want to watch.
          </p>
          <Link href="/movie">Browse Popular Movies</Link>
          <Link href="/series">Browse Popular TV Shows</Link>
        </div>
      )}

      <div className={styles.backContainer}>
        <Link className={styles.backButton} href="/movie">
          <FaArrowLeft className={styles.icon} />
          <p>Back</p>
        </Link>
      </div>
    </div>
  );
};
export default Watchlist;
