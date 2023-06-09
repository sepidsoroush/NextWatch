import styles from "@/styles/PageContent.module.css";
import { AppContext } from "@/context/app-context";
import { useContext } from "react";
import Alert from "../../components/UI/Alert";
import Pagination from "../../components/UI/Pagination";
import SearchList from "../../components/Movies/SearchList";
import Categories from "@/components/Search/Categories";
import SearchBox from "@/components/Search/SearchBox";

const PageContent = () => {
  const { error, searchedMovies } = useContext(AppContext);

  return (
    <div className={styles.container}>
      <Alert error={error} />
      <div className={styles.panel}>
        <SearchBox />
        <Categories />
      </div>
      <div className={styles.results}>
        <SearchList searchResult={searchedMovies} />
        <Pagination />
      </div>
    </div>
  );
};
export default PageContent;
