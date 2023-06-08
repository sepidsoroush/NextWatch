import { useRouter } from "next/router";
import styles from "@/styles/Movie.module.css";
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";
import { Inter } from "next/font/google";
import DetailInfo from "@/components/Movies/Detail";
import Loading from "@/components/UI/Loading";
import useFetch from "@/hooks/use-fetch";

const inter = Inter({ subsets: ["latin"] });

const GameDetail = () => {
  const router = useRouter();
  const { gameId } = router.query;

  const { isLoading, searchedMovies: item } = useFetch(`&i=${gameId}`);

  return (
    <div className={`${styles.body} ${inter.className}`}>
      {isLoading ? (
        <Loading />
      ) : (
        <div className={styles.container}>
          <DetailInfo item={item} />
          <div className={styles.backContainer}>
            <Link className={styles.backButton} href="/game">
              <FaArrowLeft className={styles.icon} />
              <p>Back</p>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
export default GameDetail;
