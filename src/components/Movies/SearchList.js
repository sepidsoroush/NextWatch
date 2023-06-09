import styles from "@/styles/SearchList.module.css";
import Card from "./Card";

const SearchList = (props) => {
  return (
    <>
      {props.searchResult && (
        <ul className={styles.grid}>
          {props.searchResult.map((item) => (
            <li key={item.id}>
              <Card info={item} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
export default SearchList;
