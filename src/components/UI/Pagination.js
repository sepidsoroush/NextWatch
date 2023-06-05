import { useState } from "react";
import styles from "@/styles/Pagination.module.css";

const Pagination = (props) => {
  const totalPages = Math.ceil(props.results / 10);
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
      parseInt(props.input.page) !== 2 &&
      (parseInt(props.input.page) - 1) % pagesLimit === 0
    ) {
      setMaxLimit(maxLimit - pagesLimit);
      setMinLimit(minLimit - pagesLimit);
    }
    props.onPrevPage();
  };

  const nextPageHandler = () => {
    if ((parseInt(props.input.page) + 1) % pagesLimit === 1) {
      setMaxLimit(maxLimit + pagesLimit);
      setMinLimit(minLimit + pagesLimit);
    }
    props.onNextPage(totalPages);
  };
  const changePageHandler = (event) => {
    props.onChangePage(event.target.value);
  };

  const pageNumbers = pages.map((number) => {
    if (number <= maxLimit && number > minLimit) {
      return (
        <button
          className={`${styles.button} ${styles.numbers}`}
          style={
            parseInt(props.input.page) == number
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
