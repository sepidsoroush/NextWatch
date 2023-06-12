import styles from "@/styles/SearchBox.module.css";
import { AppContext } from "@/context/app-context";
import { useContext, useRef } from "react";
import { FaSearch } from "react-icons/fa";
import { useRouter } from "next/router";

const SearchBox = () => {
  const { setInput } = useContext(AppContext);
  const titleInputRef = useRef();
  const router = useRouter();

  const submitHandler = (event) => {
    event.preventDefault();
    const val = titleInputRef.current.value;
    setInput((prevState) => {
      return { ...prevState, title: val };
    });
    router.push(`/search?query=${encodeURIComponent(val)}`);
  };

  const handleKeypress = (event) => {
    if (event.keyCode === 13) {
      submitHandler(event);
    }
  };

  return (
    <form className={styles.searchBox} onSubmit={submitHandler}>
      <input
        className={styles.input}
        type="text"
        name="search"
        placeholder="Search ..."
        ref={titleInputRef}
        required
        onKeyDown={handleKeypress}
      />
      <button className={styles.button} type="submit">
        <FaSearch style={{ height: "100%" }} />
      </button>
    </form>
  );
};

export default SearchBox;
