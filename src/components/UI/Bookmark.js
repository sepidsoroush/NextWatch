import { useContext, useState } from "react";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";
import { AppContext } from "@/context/app-context";
import styles from "@/styles/Bookmark.module.css";
import Alert from "./Alert";

const Bookmark = (props) => {
  const { watchlist, toggleWatchlist } = useContext(AppContext);
  const [showNotification, setShowNotification] = useState(false);
  const isBookmarked = watchlist.some(
    (movie) => movie.imdbID === props.info.imdbID
  );

  const handleBookmark = () => {
    toggleWatchlist(props.info);
    setShowNotification(true);
  };

  const handleNotificationClose = () => {
    setShowNotification(false);
  };

  return (
    <>
      <div className={styles.bookmark} onClick={handleBookmark}>
        {isBookmarked ? (
          <FaBookmark className={styles.icon} />
        ) : (
          <FaRegBookmark className={styles.icon} />
        )}
      </div>
      {showNotification && (
        <Alert
          message={
            isBookmarked ? "Added to Watchlist" : "Removed from Watchlist"
          }
          type={isBookmarked ? "success" : "error"}
          onClose={handleNotificationClose}
        />
      )}
    </>
  );
};

export default Bookmark;
