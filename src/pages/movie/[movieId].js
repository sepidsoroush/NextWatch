import styles from "@/styles/Movie.module.css";
import { useRouter } from "next/router";
import { FaArrowLeft } from "react-icons/fa";
import DetailInfo from "@/components/Movies/Detail";
import Loading from "@/components/UI/Loading";
import useFetch from "@/hooks/use-fetch";
import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const MovieDetail = () => {
  const router = useRouter();
  const { movieId } = router.query;
  const { isLoading, searchedMovies: item } = useFetch(`&i=${movieId}`);

  return (
    <div className={`${styles.body} ${inter.className}`}>
      {isLoading ? (
        <Loading />
      ) : (
        <div className={styles.container}>
          <DetailInfo item={item} />
          <div className={styles.backContainer}>
            <Link className={styles.backButton} href="/">
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
