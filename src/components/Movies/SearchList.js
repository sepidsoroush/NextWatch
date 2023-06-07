import styles from "@/styles/SearchList.module.css";
import Card from "./Card";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

const SearchList = (props) => {
  return (
    <div className={`${styles.container} ${inter.className}`}>
      {props.searchResult && (
        <ul className={styles.grid}>
          {props.searchResult.map((item) => (
            <li key={item.id}>
              <Card info={item} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default SearchList;
