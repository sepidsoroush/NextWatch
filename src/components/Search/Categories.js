import { useContext, useState } from "react";
import { AppContext } from "@/context/app-context";
import styles from "@/styles/Categories.module.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const Categories = () => {
  const { input, setInput } = useContext(AppContext);

  const types = [
    { id: 1, title: "All Types", type: "" },
    { id: 2, title: "Movies", type: "movie" },
    { id: 3, title: "TV Shows", type: "series" },
    { id: 4, title: "Games", type: "game" },
  ];

  const filterHandler = (event) => {
    setInput((prevState) => {
      return { ...prevState, type: event };
    });
  };

  return (
    <div className={`${inter.className} ${styles.settings}`}>
      <h4>Type of results</h4>
      <ul className={styles.filters}>
        {types.map((item) => {
          const { id, title, type } = item;
          return (
            <li key={id}>
              <button
                className={`${styles.btn} ${
                  type === input.type ? styles.active : ""
                }`}
                onClick={() => filterHandler(type)}
              >
                {title}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Categories;
