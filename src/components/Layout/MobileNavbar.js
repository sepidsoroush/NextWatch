import styles from "@/styles/Navabr.module.css";
import { FaBars, FaSearch, FaTimes } from "react-icons/fa";
import { Inter } from "next/font/google";
import SearchBox from "../UI/SearchBox";

const inter = Inter({ subsets: ["latin"] });

const MobileNavbar = (props) => {
  return (
    <div className={styles.hamburger}>
      {props.type !== "" && props.showSearchbox ? (
        <FaSearch
          onClick={props.mobileSearchboxHandler}
          className={styles.icon}
        />
      ) : (
        <div className={styles.mobileSearchbox}>
          <SearchBox type={props.type} />
          <FaTimes
            onClick={props.mobileSearchboxHandler}
            className={styles.icon}
          />
        </div>
      )}
      <FaBars onClick={props.sidebarHandler} className={styles.icon}></FaBars>
    </div>
  );
};

export default MobileNavbar;
