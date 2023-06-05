import Link from "next/link";
import styles from "@/styles/Post.module.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

const Post = (props) => {
  const {
    imdbID: id,
    Title: title,
    Year: year,
    Type: type,
    Poster: poster,
  } = props.info;
  const url =
    "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";

  return (
    <div key={id} className={`${styles.movie} ${inter.className}`}>
      <Link href={`detail/${id}`}>
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
      </Link>
    </div>
  );
};
export default Post;
