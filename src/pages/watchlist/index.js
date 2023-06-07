import { useContext } from "react";
import { AppContext } from "@/context/app-context";
import styles from "@/styles/Watchlist.module.css";
import Link from "next/link";
import Card from "@/components/Movies/Card";
import { FaArrowLeft } from "react-icons/fa";

const Watchlist = () => {
  const { watchlist } = useContext(AppContext);
  console.log(watchlist);

  return (
    <div className={styles.body}>
      {watchlist.length > 0 ? (
        <ul className={styles.grid}>
          {watchlist.map((item) => (
            <li key={item.imdbID}>
              <Card info={item} />
            </li>
          ))}
        </ul>
      ) : (
        <p>Watch list is epmty.</p>
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
