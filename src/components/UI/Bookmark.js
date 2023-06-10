import { useContext } from "react";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";
import { AppContext } from "@/context/app-context";
import styles from "@/styles/Bookmark.module.css";

const Bookmark = (props) => {
  const { watchlist, toggleWatchlist } = useContext(AppContext);
  const isBookmarked = watchlist.some(
    (movie) => movie.imdbID === props.info.imdbID
  );

  const handleBookmark = () => {
    toggleWatchlist(props.info);
  };

  return (
    <div className={styles.bookmark} onClick={handleBookmark}>
      {isBookmarked ? (
        <FaBookmark className={styles.icon} />
      ) : (
        <FaRegBookmark className={styles.icon} />
      )}
    </div>
  );
};

export default Bookmark;
