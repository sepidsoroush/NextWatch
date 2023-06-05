import styles from "@/styles/Home.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
import SearchBox from "../components/UI/SearchBox";
import Alert from "../components/UI/Error";
import Pagination from "../components/UI/Pagination";
import MoviesList from "../components/Movies/MovieList";

export default function Home() {
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [input, setInput] = useState({
    title: "Batman",
    type: "",
    page: 1,
  });
  const [error, setError] = useState("");
  const [results, setResults] = useState("");

  const getData = () => {
    axios
      .get(
        `http://www.omdbapi.com/?apikey=6749959a&s=${input.title}&type=${input.type}&page=${input.page}`
      )
      .then((response) => {
        setSearchedMovies(response.data.Search);
        setError(response.data.Error);
        setResults(response.data.totalResults);
        // console.log(response)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getData();
  }, [input]);

  // SearchBox functions
  const categoryHandler = (category) => {
    setInput({ ...input, type: category });
  };
  const inputHandler = (value) => {
    setInput({ ...input, title: value, page: 1 });
  };

  // Pagination functions
  const fetchPrevPage = () => {
    setInput(() => {
      let prevPage = parseInt(input.page) - 1;
      if (prevPage <= 0) {
        prevPage = 1;
      }
      return { ...input, page: prevPage };
    });
  };
  const fetchNextPage = (totalPages) => {
    setInput(() => {
      let nextPage = parseInt(input.page) + 1;
      if (nextPage >= totalPages) {
        nextPage = totalPages;
      }
      return { ...input, page: nextPage };
    });
  };

  const changePageHandler = (value) => {
    setInput({ ...input, page: Number(value) });
  };

  return (
    <div className={styles.container}>
      <SearchBox
        onChooseCategory={categoryHandler}
        onChangeInput={inputHandler}
        onFetchData={getData}
      />
      <Alert error={error} />
      <MoviesList searchResult={searchedMovies} />
      <Pagination
        results={results}
        input={input}
        onPrevPage={fetchPrevPage}
        onNextPage={fetchNextPage}
        onChangePage={changePageHandler}
      />
    </div>
  );
}
