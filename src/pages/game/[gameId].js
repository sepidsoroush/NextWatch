import styles from "@/styles/Movie.module.css";
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";
import { Inter } from "next/font/google";
import DetailInfo from "@/components/Movies/Detail";

const inter = Inter({ subsets: ["latin"] });

const GameDetail = () => {
  const item = {
    Title: "The Last of Us",
    Year: "2023–",
    Rated: "TV-MA",
    Released: "15 Jan 2023",
    Runtime: "18S min",
    Genre: "Action, Adventure, Drama",
    Director: "N/A",
    Writer: "Neil Druckmann, Craig Mazin",
    Actors: "Pedro Pascal, Bella Ramsey, Anna Torv",
    Plot: "After a global pandemic destroys civilization, a hardened survivor takes charge of a 14-year-old girl who may be humanity's last hope.",
    Language: "English",
    Country: "Canada, United States",
    Awards: "6 nominations",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZGUzYTI3M2EtZmM0Yy00NGUyLWI4ODEtN2Q3ZGJlYzhhZjU3XkEyXkFqcGdeQXVyNTM0OTY1OQ@@._V1_SX300.jpg",
    Ratings: [
      {
        Source: "Internet Movie Database",
        Value: "8.8/10",
      },
    ],
    Metascore: "N/A",
    imdbRating: "8.8",
    imdbVotes: "404,667",
    imdbID: "tt3581920",
    Type: "series",
    totalSeasons: "1",
    Response: "True",
  };

  return (
    <div className={`${styles.body} ${inter.className}`}>
      <div className={styles.container}>
        <DetailInfo item={item} />
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
export default GameDetail;
