import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import axios from "axios";
import styles from "@/styles/Movie.module.css";
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";
import { Inter } from "next/font/google";
import DetailInfo from "@/components/Movies/Detail";
import Loading from "@/components/UI/Loading";

const inter = Inter({ subsets: ["latin"] });

const TvDetail = () => {
  const router = useRouter();
  const { seriesId } = router.query;
  const [item, setItem] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`http://www.omdbapi.com/?apikey=6749959a&i=${seriesId}`)
      .then((response) => {
        setItem(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, [seriesId]);

  return (
    <div className={`${styles.body} ${inter.className}`}>
      {isLoading ? (
        <Loading />
      ) : (
        <div className={styles.container}>
          <DetailInfo item={item} />
          <div className={styles.backContainer}>
            <Link className={styles.backButton} href="/series">
              <FaArrowLeft className={styles.icon} />
              <p>Back</p>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
export default TvDetail;