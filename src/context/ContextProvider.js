import { AppContext } from "./app-context";
import { useState } from "react";
import useFetch from "../hooks/use-fetch";
export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;

const ContextProvider = (props) => {
  // search context
  const [input, setInput] = useState({
    title: "Batman",
    page: 1,
    type: "",
  });
  const { isLoading, error, searchedMovies } = useFetch(
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
    input,
    setInput,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default ContextProvider;
