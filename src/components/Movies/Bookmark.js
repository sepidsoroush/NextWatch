import { useContext } from "react";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";
import { AppContext } from "@/context/app-context";

const Bookmark = (props) => {
  const { watchlist, toggleWatchlist } = useContext(AppContext);
  const isBookmarked = watchlist.includes(props.info.imdbID);

  const handleBookmark = () => {
    toggleWatchlist(props.info.imdbID);
  };

  return (
    <div>
      <button onClick={handleBookmark}>
        {isBookmarked ? <FaBookmark /> : <FaRegBookmark />}
      </button>
      <span>{isBookmarked ? "Remove from Watchlist" : "Add to Watchlist"}</span>
    </div>
  );
};
export default Bookmark;
