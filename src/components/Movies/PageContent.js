import styles from "@/styles/PageContent.module.css";
import { AppContext } from "@/context/app-context";
import { useContext } from "react";
import Alert from "../UI/Alert";
import Pagination from "../UI/Pagination";
import SearchList from "../Movies/SearchList";

const PageContent = () => {
  const { error, searchedMovies } = useContext(AppContext);

  return (
    <div className={styles.container}>
      <Alert error={error} />
      <SearchList searchResult={searchedMovies} />
      <Pagination />
    </div>
  );
};
export default PageContent;
