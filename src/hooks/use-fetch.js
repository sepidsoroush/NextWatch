import { useState, useEffect } from "react";
const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;

const useFetch = (urlParams) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState({ show: false, msg: "" });
  const [searchedMovies, setSearchedMovies] = useState(null);
  const [totalResults, setTotalResults] = useState();

  const fetchMovies = async (url) => {
    setIsLoading(true);
    await axios
      .get(url)
      .then((response) => {
        const data = response.json();
        if (data.Response === "True") {
          setSearchedMovies(data.Search || data);
          setError({ show: false, msg: "" });
        } else {
          setError({ show: true, msg: data.Error });
        }
        setIsLoading(false);
        setTotalResults(data.totalResults);
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
