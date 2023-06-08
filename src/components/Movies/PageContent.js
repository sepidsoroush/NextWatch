import styles from "@/styles/PageContent.module.css";
import { AppContext } from "@/context/app-context";
import { useContext } from "react";
import SearchBox from "../UI/SearchBox";
import Alert from "../UI/Error";
import Pagination from "../UI/Pagination";
import SearchList from "../Movies/SearchList";

const PageContent = (props) => {
  const { input, setInput, error, searchedMovies, totalResults } =
    useContext(AppContext);

  // Pagination functions
  const fetchPrevPage = () => {
    setInput(() => {
      let prevPage = parseInt(input.page) - 1;
      if (prevPage <= 0) {
        prevPage = 1;
      }
      return { ...input, page: prevPage };
    });
  };
  const fetchNextPage = (totalPages) => {
    setInput(() => {
      let nextPage = parseInt(input.page) + 1;
      if (nextPage >= totalPages) {
        nextPage = totalPages;
      }
      return { ...input, page: nextPage };
    });
  };

  const changePageHandler = (value) => {
    setInput({ ...input, page: Number(value) });
  };

  return (
    <div className={styles.container}>
      <SearchBox type={props.type} />
      <Alert error={error} />
      <SearchList searchResult={searchedMovies} />
      <Pagination
        results={totalResults}
        input={input}
        onPrevPage={fetchPrevPage}
        onNextPage={fetchNextPage}
        onChangePage={changePageHandler}
      />
    </div>
  );
};
export default PageContent;
