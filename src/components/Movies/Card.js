import Link from "next/link";
import styles from "@/styles/Card.module.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

const Card = (props) => {
  const {
    imdbID: id,
    Title: title,
    Year: year,
    Type: type,
    Poster: poster,
  } = props.info;
  const url =
    "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";

  let updatedTitle;
  if (title.length > 35) {
    updatedTitle = title.slice(0, 35) + "...";
  } else {
    updatedTitle = title;
  }

  return (
    <Link href={`movie/${id}`}>
      <div key={id} className={`${styles.movie} ${inter.className}`}>
        <img src={poster === "N/A" ? url : poster} alt={title} />
        <div className={styles.content}>
          <span className={styles.title}>{updatedTitle}</span>
          <span className={styles.detail}>
            {year} - {type}
          </span>
        </div>
      </div>
    </Link>
  );
};
export default Card;
