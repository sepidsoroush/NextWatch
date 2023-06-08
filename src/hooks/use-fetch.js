import { useState, useEffect } from "react";
import axios from "axios";
const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;

const useFetch = (urlParams) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchedMovies, setSearchedMovies] = useState(null);
  const [totalResults, setTotalResults] = useState();

  const fetchMovies = async (url) => {
    setIsLoading(true);
    await axios
      .get(url)
      .then((response) => {
        if (response.data.Response === "True") {
          setSearchedMovies(response.data.Search || response.data);
        } else {
          setError(response.data.Error);
        }
        setIsLoading(false);
        setTotalResults(response.data.totalResults);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchMovies(`${API_ENDPOINT}${urlParams}`);
  }, [urlParams]);
  return { isLoading, error, searchedMovies, totalResults };
};

export default useFetch;
