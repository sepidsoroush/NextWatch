import { useRouter } from "next/router";
import styles from "@/styles/Movie.module.css";
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";
import { Inter } from "next/font/google";
import DetailInfo from "@/components/Movies/Detail";
import Loading from "@/components/UI/Loading";
import useFetch from "@/hooks/use-fetch";

const inter = Inter({ subsets: ["latin"] });

const TvDetail = () => {
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
