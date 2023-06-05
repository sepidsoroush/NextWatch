import { AppContext } from "./app-context";
import { useState } from "react";

const ContextProvider = (props) => {
  const [watchlist, setWatchlist] = useState([]);

  const toggleWatchlist = (movie) => {
    if (watchlist.includes(movie)) {
      setWatchlist(watchlist.filter((m) => m !== movie));
    } else {
      setWatchlist([...watchlist, movie]);
    }
  };

  const value = {
    watchlist,
    toggleWatchlist,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default ContextProvider;
