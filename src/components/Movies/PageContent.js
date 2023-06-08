import styles from "@/styles/PageContent.module.css";
import { AppContext } from "@/context/app-context";
import { useContext } from "react";
import SearchBox from "../UI/SearchBox";
import Alert from "../UI/Error";
import Pagination from "../UI/Pagination";
import SearchList from "../Movies/SearchList";

const PageContent = (props) => {
  const { error, searchedMovies } = useContext(AppContext);

  return (
    <div className={styles.container}>
      <SearchBox type={props.type} />
      <Alert error={error} />
      <SearchList searchResult={searchedMovies} />
      <Pagination />
    </div>
  );
};
export default PageContent;
