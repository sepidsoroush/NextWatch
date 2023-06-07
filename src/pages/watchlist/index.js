import { useContext } from "react";
import Link from "next/link";
import Post from "@/components/Movies/Card";
import { AppContext } from "@/context/app-context";
import Bookmark from "@/components/Movies/Bookmark";

const Watchlist = () => {
  const { watchlist } = useContext(AppContext);
  console.log(watchlist);

  return (
    <>
      {watchlist.length > 0 ? (
        watchlist.map((item) => {
          return (
            <div key={item.id}>
              <Post info={item} />
              <Bookmark info={item} />
            </div>
          );
        })
      ) : (
        <p>Watch list is epmty.</p>
      )}

      <Link href="/">Home Page</Link>
    </>
  );
};
export default Watchlist;
