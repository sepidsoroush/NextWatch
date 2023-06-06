import { useContext } from "react";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";
import { AppContext } from "@/context/app-context";
import styles from "@/styles/Bookmark.module.css";

const Bookmark = (props) => {
  const { watchlist, toggleWatchlist } = useContext(AppContext);
  const isBookmarked = watchlist.includes(props.info.imdbID);

  const handleBookmark = () => {
    toggleWatchlist(props.info.imdbID);
  };

  return (
    <div className={styles.infoTitle}>
      <p onClick={handleBookmark} className={styles.icon}>
        {isBookmarked ? <FaBookmark /> : <FaRegBookmark />}
      </p>
      <span>{isBookmarked ? "Remove from Watchlist" : "Add to Watchlist"}</span>
    </div>
  );
};
export default Bookmark;
