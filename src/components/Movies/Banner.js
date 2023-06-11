import Image from "next/image";
import styles from "@/styles/Banner.module.css";
import { Inter } from "next/font/google";
import SearchBox from "../Search/SearchBox";
const inter = Inter({ subsets: ["latin"] });

const Banner = ({ title, text, img }) => {
  return (
    <div className={`${styles.main} ${inter.className}`}>
      <div className={styles.sidetext}>
        <div>
          <h2>{title}</h2>
          <p>{text}</p>
          <SearchBox type="" />
        </div>
      </div>
      <div className={styles.image}>
        <Image src={img} alt="banner" />
      </div>
    </div>
  );
};

export default Banner;
