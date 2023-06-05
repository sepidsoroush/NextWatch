import styles from "@/styles/Home.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
import SearchBox from "../components/UI/SearchBox";
import Alert from "../components/UI/Error";
import Pagination from "../components/UI/Pagination";
import MoviesList from "../components/Movies/MovieList";
import { AppContext } from "@/context/app-context";

export default function Home() {
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [input, setInput] = useState({
    title: "Batman",
    type: "",
    page: 1,
  });
  const [error, setError] = useState("");
  const [results, setResults] = useState("");
  const [booked, setBooked] = useState(false);

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
  const handleKeypress = (e) => {
    //it triggers by pressing the enter key
    if (e.keyCode === 13) {
      getData();
    }
  };
  // console.log(input)
  return (
    <div className={styles.container}>
      <AppContext.Provider
        value={{
          searchedMovies,
          input,
          setInput,
          getData,
          handleKeypress,
          error,
          results,
          booked,
          setBooked,
        }}
      >
        <SearchBox />
        <Alert />
        <MoviesList />
        <Pagination />
      </AppContext.Provider>
    </div>
  );
}
