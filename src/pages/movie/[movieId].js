import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import axios from "axios";
import styles from "@/styles/Movie.module.css";
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";
import { Inter } from "next/font/google";
import DetailInfo from "@/components/Movies/Detail";

const inter = Inter({ subsets: ["latin"] });

const MovieDetail = () => {
  const router = useRouter();
  const { movieId } = router.query;
  const [item, setItem] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`http://www.omdbapi.com/?apikey=6749959a&i=${movieId}`)
      .then((response) => {
        setItem(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, [movieId]);

  return (
    <div className={`${styles.body} ${inter.className}`}>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className={styles.container}>
          <DetailInfo item={item} />
          <div className={styles.backContainer}>
            <Link className={styles.backButton} href="/movie">
              <FaArrowLeft className={styles.icon} />
              <p>Back</p>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetail;
