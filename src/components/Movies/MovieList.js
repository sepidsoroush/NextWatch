import styles from "@/styles/List.module.css";
import Card from "./Card";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

const MoviesList = (props) => {
  return (
    <div className={`${styles.container} ${inter.className}`}>
      {props.searchResult && (
        <>
          <h1>Search results:</h1>
          <ul className={styles.grid}>
            {props.searchResult.map((item) => (
              <li key={item.id}>
                <Card info={item} />
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};
export default MoviesList;
