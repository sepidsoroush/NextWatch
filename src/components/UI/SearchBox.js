import styles from "@/styles/SearchBox.module.css";
import { useRef } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBox = (props) => {
  const titleInputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    props.onChangeInput(titleInputRef.current.value);
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
    <form className={styles.searchBox} onSubmit={submitHandler}>
      <input
        className={styles.input}
        type="text"
        placeholder="Search"
        ref={titleInputRef}
        required
        onKeyDown={handleKeypress}
      />
      <button className={styles.button} onClick={searchHandler}>
        <FaSearch style={{ height: "100%" }} />
      </button>
    </form>
  );
};
export default SearchBox;
