import styles from "@/styles/Movie.module.css";
import { useRouter } from "next/router";
import { FaArrowLeft } from "react-icons/fa";
import DetailInfo from "@/components/Movies/Detail";
import Loading from "@/components/UI/Loading";
import useFetch from "@/hooks/use-fetch";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const MovieDetail = () => {
  const router = useRouter();
  const { seriesId } = router.query;
  const { isLoading, searchedMovies: item } = useFetch(`&i=${seriesId}`);

  return (
    <div className={`${styles.body} ${inter.className}`}>
      {isLoading ? (
        <Loading />
      ) : (
        <div className={styles.container}>
          <DetailInfo item={item} />
          <div className={styles.backContainer} onClick={() => router.back()}>
            <div className={styles.backButton}>
              <FaArrowLeft className={styles.icon} />
              <p>Back</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetail;
