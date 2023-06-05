import { useContext } from "react";
import Link from "next/link";
import Post from "@/components/Movies/Post";
import { AppContext } from "@/context/app-context";

const Watchlist = () => {
  const { watchlist } = useContext(AppContext);

  return (
    <div>
      <div>
        {watchlist.length > 0 ? (
          watchlist.map((item) => {
            return (
              <div key={item.imdbID}>
                <Post info={item} />
              </div>
            );
          })
        ) : (
          <p>Watch list is epmty.</p>
        )}
      </div>

      <Link href="/">Home Page</Link>
    </div>
  );
};
export default Watchlist;
