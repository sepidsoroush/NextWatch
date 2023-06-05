import Link from "next/link";
import styles from "@/styles/List.module.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

const MoviesList = (props) => {
  const url =
    "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";
  return (
    <div className={`${styles.container} ${inter.className}`}>
      {props.searchResult ? (
        <h1 className={styles.header}>Search results:</h1>
      ) : null}
      {props.searchResult
        ? props.searchResult.map((item) => {
            const {
              imdbID: id,
              Title: title,
              Year: year,
              Type: type,
              Poster: poster,
            } = item;
            return (
              <Link href={`detail/${id}`}>
                <div key={id} className={styles.movie}>
                  <img
                    src={poster === "N/A" ? url : poster}
                    alt={title}
                    className={styles.poster}
                  />
                  <div className={styles.info}>
                    <p className={styles.title}>{title}</p>
                    <p className={styles.detail}>{year}</p>
                    <p className={styles.detail}>{type}</p>
                  </div>
                </div>
              </Link>
            );
          })
        : null}
    </div>
  );
};
export default MoviesList;
