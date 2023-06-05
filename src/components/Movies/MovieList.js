import styles from "@/styles/List.module.css";
import Post from "./Post";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

const MoviesList = (props) => {
  return (
    <div className={`${styles.container} ${inter.className}`}>
      {props.searchResult ? (
        <h1 className={styles.header}>Search results:</h1>
      ) : null}
      {props.searchResult
        ? props.searchResult.map((item) => <Post info={item} key={item.id} />)
        : null}
    </div>
  );
};
export default MoviesList;
