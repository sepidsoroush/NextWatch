import { useState, useContext } from "react";
import { AppContext } from "@/context/app-context";
import styles from "@/styles/Pagination.module.css";

const Pagination = () => {
  const { input, setInput, totalResults } = useContext(AppContext);
  const totalPages = Math.ceil(totalResults / 10);
  const [minLimit, setMinLimit] = useState(0);
  const [maxLimit, setMaxLimit] = useState(10);
  const pagesLimit = 10;

  // build page numbers list based on total number of pages
  let pages = [];
  for (let i = 1; i < totalPages + 1; i++) {
    pages.push(i);
  }

  const prevPageHandler = () => {
    if (
      parseInt(input.page) !== 2 &&
      (parseInt(input.page) - 1) % pagesLimit === 0
    ) {
      setMaxLimit(maxLimit - pagesLimit);
      setMinLimit(minLimit - pagesLimit);
    }
    setInput((prevState) => {
      let prevPage = parseInt(input.page) - 1;
      if (prevPage <= 0) {
        prevPage = 1;
      }
      return { ...prevState, page: prevPage };
    });
  };

  const nextPageHandler = () => {
    if ((parseInt(input.page) + 1) % pagesLimit === 1) {
      setMaxLimit(maxLimit + pagesLimit);
      setMinLimit(minLimit + pagesLimit);
    }
    setInput((prevState) => {
      let nextPage = parseInt(input.page) + 1;
      if (nextPage >= totalPages) {
        nextPage = totalPages;
      }
      return { ...prevState, page: nextPage };
    });
  };
  const changePageHandler = (event) => {
    setInput((prevState) => {
      return { ...prevState, page: Number(event.target.value) };
    });
  };

  const pageNumbers = pages.map((number) => {
    if (number <= maxLimit && number > minLimit) {
      return (
        <button
          className={`${styles.button} ${styles.numbers}`}
          style={
            parseInt(input.page) == number
              ? {
                  backgroundColor: "#f5c518",
                  color: "white",
                  border: "1px solid #f5c518",
                }
              : null
          }
          key={number}
          value={number}
          onClick={changePageHandler}
        >
          {number}
        </button>
      );
    } else {
      return null;
    }
  });

  // page ellipsis
  let incrementEllipsis = null;
  if (pages.length > maxLimit) {
    incrementEllipsis = (
      <button
        className={styles.ellipsis}
        onClick={() => {
          setMaxLimit(maxLimit + pagesLimit);
          setMinLimit(minLimit + pagesLimit);
        }}
      >
        &hellip;
      </button>
    );
  }
  let decrementEllipsis = null;
  if (minLimit > 1) {
    decrementEllipsis = (
      <button
        className={styles.ellipsis}
        onClick={() => {
          setMaxLimit(maxLimit - pagesLimit);
          setMinLimit(minLimit - pagesLimit);
        }}
      >
        &hellip;
      </button>
    );
  }

  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={prevPageHandler}>
        &lt;&lt;
      </button>
      {decrementEllipsis}
      {pageNumbers}
      {incrementEllipsis}
      <button className={styles.button} onClick={nextPageHandler}>
        &gt;&gt;
      </button>
    </div>
  );
};
export default Pagination;
