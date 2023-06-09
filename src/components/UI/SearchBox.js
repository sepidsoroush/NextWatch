import styles from "@/styles/SearchBox.module.css";
import { AppContext } from "@/context/app-context";
import { useContext, useRef } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBox = (props) => {
  const { setInput } = useContext(AppContext);
  const titleInputRef = useRef();

  const submitHandler = () => {
    const val = titleInputRef.current.value;
    setInput((prevState) => {
      return { ...prevState, title: val, type: props.type };
    });
  };
  const handleKeypress = (event) => {
    if (event.keyCode === 13) {
      submitHandler();
    }
  };

  return (
    <form className={styles.searchBox}>
      <input
        className={styles.input}
        type="text"
        placeholder="Search ..."
        ref={titleInputRef}
        required
        onKeyDown={handleKeypress}
      />
      <button className={styles.button} onClick={submitHandler}>
        <FaSearch style={{ height: "100%" }} />
      </button>
    </form>
  );
};
export default SearchBox;
