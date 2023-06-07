import styles from "@/styles/SearchBox.module.css";
import { FaSearch } from "react-icons/fa";

const SearchBox = (props) => {
  const categoriesHandler = (event) => {
    props.onChooseCategory(event.target.value);
  };
  const inputHandler = (event) => {
    props.onChangeInput(event.target.value);
  };
  const handleKeypress = (event) => {
    if (event.keyCode === 13) {
      props.onFetchData();
    }
  };
  const searchHandler = () => {
    props.onFetchData();
  };

  return (
    <div className={styles.searchBox}>
      <select onChange={categoriesHandler} className={styles.type}>
        <option value="">All</option>
        <option value="movie">Movie</option>
        <option value="series">TV Series</option>
        <option value="episode">Episode</option>
        <option value="game">Game</option>
      </select>
      <input
        className={styles.input}
        type="text"
        placeholder="Search"
        required
        onChange={inputHandler}
        onKeyDown={handleKeypress}
      />
      <button className={styles.button} onClick={searchHandler}>
        <FaSearch style={{ height: "100%" }} />
      </button>
    </div>
  );
};
export default SearchBox;
