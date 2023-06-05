import { useEffect, useState, useContext } from "react";
import { database } from "../../../firebase";
import { collection, doc, getDocs, getDoc } from "firebase/firestore";
import Link from "next/link";
import Bookmark from "@/components/Movies/Bookmark";
import { AppContext } from "@/context/app-context";

const Watchlist = () => {
  const data = [];
  const [list, setList] = useState([]);
  const { booked, setBooked } = useContext(AppContext);
  const getData = async () => {
    try {
      const querySnapshot = await getDocs(collection(database, "watchlist"));
      querySnapshot.forEach((doc) => {
        data.push(doc.data());
        setList(data);
      });
    } catch (error) {
      console.log(error);
    }
  };
  const checkBookmark = async () => {
    const docRef = doc(database, "watchlist", list.id);
    try {
      const docSnap = await getDoc(docRef);
      console.log(docSnap.data());
      setBooked(true);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
    checkBookmark();
  }, [list]);

  return (
    <div>
      <div>
        {list.map((item) => {
          const { id, title } = item;
          return (
            <div key={id}>
              <Bookmark booked={booked} />
              <Link href={`${id}`}>{title}</Link>
            </div>
          );
        })}
      </div>

      <Link href="/">Home Page </Link>
    </div>
  );
};
export default Watchlist;
