import { AppContext } from "@/context/app-context";
import styles from "@/styles/SearchBox.module.css";
import { useContext, useRef } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBox = (props) => {
  const { setInput, error } = useContext(AppContext);
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
    <div className={styles.searchBox}>
      <input
        className={styles.input}
        type="text"
        placeholder={
          props.type === "" ? "Search in Database" : `Search in ${props.type}`
        }
        ref={titleInputRef}
        required
        onKeyDown={handleKeypress}
      />
      <button className={styles.button} onClick={submitHandler}>
        <FaSearch style={{ height: "100%" }} />
      </button>
      {error && <div className="error">{error}</div>}
    </div>
  );
};
export default SearchBox;
