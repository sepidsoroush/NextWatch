import styles from "@/styles/TopPicks.module.css";
import Card from "./Card";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const TopPicks = () => {
  const DUMMY_LIST = [
    {
      Title: "Breaking Bad",
      Year: "2008–2013",
      imdbID: "tt0903747",
      Type: "series",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BYmQ4YWMxYjUtNjZmYi00MDQ1LWFjMjMtNjA5ZDdiYjdiODU5XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_SX300.jpg",
    },
    {
      Title: "The Sopranos",
      Year: "1999–2007",
      imdbID: "tt0141842",
      Type: "series",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZGJjYzhjYTYtMDBjYy00OWU1LTg5OTYtNmYwOTZmZjE3ZDdhXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    },
    {
      Title: "The Shawshank Redemption",
      Year: "1994",
      imdbID: "tt0111161",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_SX300.jpg",
    },
    {
      Title: "Game of Thrones",
      Year: "2011–2019",
      imdbID: "tt0944947",
      Type: "series",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_SX300.jpg",
    },
    {
      Title: "The Office",
      Year: "2005–2013",
      imdbID: "tt0386676",
      Type: "series",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMDNkOTE4NDQtMTNmYi00MWE0LWE4ZTktYTc0NzhhNWIzNzJiXkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_SX300.jpg",
    },
    {
      Title: "True Detective",
      Year: "2014–",
      imdbID: "tt2356777",
      Type: "series",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMmRlYmE0Y2UtNDk2Yi00NzczLWEwZTEtZmE2OTcyYzcxYmU5XkEyXkFqcGdeQXVyNTMxMjgxMzA@._V1_SX300.jpg",
    },
    {
      Title: "BoJack Horseman",
      Year: "2014–2020",
      imdbID: "tt3398228",
      Type: "series",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BYWQwMDNkM2MtODU4OS00OTY3LTgwOTItNjE2Yzc0MzRkMDllXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
    },
    {
      Title: "Rick and Morty",
      Year: "2013–",
      imdbID: "tt2861424",
      Type: "series",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZjRjOTFkOTktZWUzMi00YzMyLThkMmYtMjEwNmQyNzliYTNmXkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_SX300.jpg",
    },
    {
      Title: "The Godfather",
      Year: "1972",
      imdbID: "tt0068646",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    },
    {
      Title: "Léon: The Professional",
      Year: "1994",
      imdbID: "tt0110413",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOTgyMWQ0ZWUtN2Q2MS00NmY0LWI3OWMtNjFkMzZlNDZjNTk0XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg",
    },
  ];

  const slideLeft = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 232;
  };

  const slideRight = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 232;
  };

  return (
    <div className={`${styles.container} ${inter.className}`}>
      <div className={styles.scrollbar}>
        <h3>Top Picks</h3>
        <div className={styles.btns}>
          <button onClick={slideLeft}>
            <FaArrowLeft />
          </button>
          <button onClick={slideRight}>
            <FaArrowRight />
          </button>
        </div>
      </div>
      <ul className={styles.rowContainer} id="slider">
        {DUMMY_LIST.map((item) => (
          <li key={item.imdbID}>
            <Card info={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default TopPicks;
