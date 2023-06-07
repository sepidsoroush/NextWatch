import { AppContext } from "./app-context";
import { useState } from "react";

const ContextProvider = (props) => {
  const [watchlist, setWatchlist] = useState([]);

  const toggleWatchlist = (movie) => {
    const movieIndex = watchlist.findIndex((m) => m.imdbID === movie.imdbID);

    if (movieIndex !== -1) {
      setWatchlist((prevWatchlist) =>
        prevWatchlist.filter((m) => m.imdbID !== movie.imdbID)
      );
    } else {
      setWatchlist((prevWatchlist) => [...prevWatchlist, movie]);
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
