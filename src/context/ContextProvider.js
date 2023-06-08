import { AppContext } from "./app-context";
import { useState } from "react";
import useFetch from "../hooks/use-fetch";

const ContextProvider = (props) => {
  // search context
  const [input, setInput] = useState({
    title: "Batman",
    page: 1,
    type: "",
  });
  const { isLoading, error, searchedMovies, totalResults } = useFetch(
    `&s=${input.title}&type=${input.type}&page=${input.page}`
  );

  // watchlist context
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
    isLoading,
    error,
    searchedMovies,
    totalResults,
    input,
    setInput,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default ContextProvider;
