import { useState } from "react";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";
import { database } from "../../../firebase";
import { collection, doc, deleteDoc, setDoc } from "firebase/firestore";
const Bookmark = ({ items }) => {
  const [booked, setBooked] = useState(false);
  const handleBookmark = async (e) => {
    e.preventDefault();
    if (!booked) {
      await setDoc(doc(collection(database, "watchlist"), items.imdbID), {
        id: items.imdbID,
        title: items.Title,
      });
      setBooked(true);
    } else {
      const collectionById = doc(database, "watchlist", items.imdbID);
      deleteDoc(collectionById);
      setBooked(false);
    }
  };

  return (
    <div>
      <div onClick={handleBookmark}>
        {booked ? <FaBookmark /> : <FaRegBookmark />}
        <p>{booked ? "Remove from Watchlist" : "Add to Watchlist"}</p>
      </div>
    </div>
  );
};
export default Bookmark;
