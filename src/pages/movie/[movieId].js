// import { useRouter } from "next/router";
import { useEffect, useState } from "react";
// import axios from "axios";
import styles from "@/styles/Movie.module.css";
import Bookmark from "@/components/Movies/Bookmark";
import { FaArrowLeft, FaAward, FaStar, FaFilm } from "react-icons/fa";
import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const MovieDetail = () => {
  // declare varibles
  //   const router = useRouter();
  //   const { id } = router.query;
  //   const [item, setItem] = useState({});
  const [showCredits, setShowCredits] = useState(false);
  const [showAwards, setShowAwards] = useState(false);
  const [showRatings, setShowRatings] = useState(false);
  const url =
    "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";

  //   const findMovie = () => {
  //     axios
  //       .get(`http://www.omdbapi.com/?apikey=6749959a&i=${id}`)
  //       .then((response) => {
  //         setItem(response.data);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   };
  //   useEffect(() => {
  //     findMovie();
  //   }, []);

  const item = {
    Title: "Batman Begins",
    Year: "2005",
    Rated: "PG-13",
    Released: "15 Jun 2005",
    Runtime: "140 min",
    Genre: "Action, Crime, Drama",
    Director: "Christopher Nolan",
    Writer: "Bob Kane, David S. Goyer, Christopher Nolan",
    Actors: "Christian Bale, Michael Caine, Ken Watanabe",
    Plot: "After witnessing his parents' death, Bruce learns the art of fighting to confront injustice. When he returns to Gotham as Batman, he must stop a secret society that intends to destroy the city.",
    Language: "English, Mandarin",
    Country: "United States, United Kingdom",
    Awards: "Nominated for 1 Oscar. 14 wins & 79 nominations total",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    Ratings: [
      { Source: "Internet Movie Database", Value: "8.2/10" },
      { Source: "Rotten Tomatoes", Value: "84%" },
      { Source: "Metacritic", Value: "70/100" },
    ],
    Metascore: "70",
    imdbRating: "8.2",
    imdbVotes: "1,501,889",
    imdbID: "tt0372784",
    Type: "movie",
    DVD: "18 Oct 2005",
    BoxOffice: "$206,863,479",
    Production: "N/A",
    Website: "N/A",
    Response: "True",
  };

  const showCreditsHandler = () => {
    setShowCredits(!showCredits);
  };
  const showAwardsHandler = () => {
    setShowAwards(!showAwards);
  };
  const showRatingsHandler = () => {
    setShowRatings(!showRatings);
  };

  return (
    <div className={`${styles.body} ${inter.className}`}>
      <div className={styles.container}>
        <div className={styles.main}>
          <div>
            <img
              style={
                item.Poster === "N/A"
                  ? { width: "240px", height: "320px" }
                  : null
              }
              src={item.Poster === "N/A" ? url : item.Poster}
              alt={item.Title}
            />
          </div>
          <div className={styles.right}>
            <div className={styles.header}>
              <h1 className={styles.title}>{item.Title}</h1>
              <p className={styles.headerInfo}>
                {item.Type} • {item.Year} • {item.Rated} • {item.Runtime}
              </p>
            </div>
            <div>
              {item.Genre.split(", ").map((element) => {
                return <span className={styles.genre}>{element}</span>;
              })}
            </div>
            <div>
              <p className={styles.plot}>{item.Plot}</p>
            </div>
            <div className={styles.infoContainer} onClick={showCreditsHandler}>
              <p className={styles.infoTitle}>
                <FaFilm className={styles.icon} />
                Top credits
              </p>
              {showCredits && (
                <div className={styles.infoDetails}>
                  <p>
                    Actors: <span>{item.Actors}</span>
                  </p>
                  <p>
                    Writer: <span>{item.Writer}</span>
                  </p>
                  <p>
                    Director: <span>{item.Director}</span>
                  </p>
                </div>
              )}
            </div>
            <div className={styles.infoContainer} onClick={showAwardsHandler}>
              <p className={styles.infoTitle}>
                <FaAward className={styles.icon} />
                Awards
              </p>
              {showAwards && (
                <div className={styles.infoDetails}>
                  <p>{item.Awards}</p>
                </div>
              )}
            </div>
            <div className={styles.infoContainer} onClick={showRatingsHandler}>
              <p className={styles.infoTitle}>
                <FaStar className={styles.icon} />
                Ratings
              </p>
              {showRatings && (
                <div className={styles.infoDetails}>
                  {item.Ratings.length > 0 &&
                    item.Ratings.map((element) => {
                      return (
                        <p>
                          {element.Source}: <span>{element.Value}</span>
                        </p>
                      );
                    })}
                </div>
              )}
            </div>
            <Bookmark info={item} />
          </div>
        </div>
        <div className={styles.backContainer}>
          <Link className={styles.backButton} href="/">
            <FaArrowLeft className={styles.icon} />
            <p>Back</p>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default MovieDetail;
