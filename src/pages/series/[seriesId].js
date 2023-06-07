import styles from "@/styles/Movie.module.css";
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";
import { Inter } from "next/font/google";
import DetailInfo from "@/components/Movies/Detail";

const inter = Inter({ subsets: ["latin"] });

const TvDetail = () => {
  const item = {
    Title: "Friends",
    Year: "1994–2004",
    Rated: "TV-14",
    Released: "22 Sep 1994",
    Runtime: "22 min",
    Genre: "Comedy, Romance",
    Director: "N/A",
    Writer: "David Crane, Marta Kauffman",
    Actors: "Jennifer Aniston, Courteney Cox, Lisa Kudrow",
    Plot: "Follows the personal and professional lives of six twenty to thirty year-old friends living in the Manhattan borough of New York City.",
    Language: "English, Spanish, Italian, French, Dutch, Hebrew",
    Country: "United States",
    Awards: "Won 6 Primetime Emmys. 78 wins & 231 nominations total",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDVkYjU0MzctMWRmZi00NTkxLTgwZWEtOWVhYjZlYjllYmU4XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg",
    Ratings: [
      {
        Source: "Internet Movie Database",
        Value: "8.9/10",
      },
    ],
    Metascore: "N/A",
    imdbRating: "8.9",
    imdbVotes: "1,027,301",
    imdbID: "tt0108778",
    Type: "series",
    totalSeasons: "10",
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
export default TvDetail;
