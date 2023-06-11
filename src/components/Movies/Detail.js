import { useState } from "react";
import styles from "@/styles/Movie.module.css";
import Bookmark from "@/components/UI/Bookmark";
import { FaAward, FaStar, FaFilm } from "react-icons/fa";
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const DetailInfo = (props) => {
  const item = props.item;
  const [showCredits, setShowCredits] = useState(false);
  const [showAwards, setShowAwards] = useState(false);
  const [showRatings, setShowRatings] = useState(false);

  const showCreditsHandler = () => {
    setShowCredits(!showCredits);
  };
  const showAwardsHandler = () => {
    setShowAwards(!showAwards);
  };
  const showRatingsHandler = () => {
    setShowRatings(!showRatings);
  };

  return (
    <div className={`${styles.main} ${inter.className}`}>
      <div className={styles.poster}>
        <Image
          style={
            item.Poster === "N/A" ? { width: "240px", height: "320px" } : null
          }
          src={item.Poster === "N/A" ? url : item.Poster}
          alt={item.Title}
          width={500}
          height={500}
        />
        <div className={styles.mobileBookmark}>
          <Bookmark info={item} />
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.header}>
          <h1 className={styles.title}>{item.Title}</h1>
          <p className={styles.headerInfo}>
            {item.Type} • {item.Year} • {item.Rated} • {item.Runtime}
          </p>
        </div>
        <div className={styles.genre}>
          {item.Genre &&
            item.Genre.split(", ").map((element) => {
              return <span key={element}>{element}</span>;
            })}
        </div>
        <div>
          <p className={styles.plot}>{item.Plot}</p>
        </div>
        <div className={styles.infoContainer} onClick={showCreditsHandler}>
          <p className={styles.infoTitle}>
            <FaFilm className={styles.icon} />
            Top credits
          </p>
          {showCredits && (
            <div className={styles.infoDetails}>
              <p>
                Actors: <span>{item.Actors}</span>
              </p>
              <p>
                Writer: <span>{item.Writer}</span>
              </p>
              <p>
                Director: <span>{item.Director}</span>
              </p>
            </div>
          )}
        </div>
        <div className={styles.infoContainer} onClick={showAwardsHandler}>
          <p className={styles.infoTitle}>
            <FaAward className={styles.icon} />
            Awards
          </p>
          {showAwards && (
            <div className={styles.infoDetails}>
              <p>{item.Awards}</p>
            </div>
          )}
        </div>
        <div className={styles.infoContainer} onClick={showRatingsHandler}>
          <p className={styles.infoTitle}>
            <FaStar className={styles.icon} />
            Ratings
          </p>
          {showRatings && (
            <div className={styles.infoDetails}>
              {item.Ratings.length > 0 &&
                item.Ratings.map((element) => {
                  return (
                    <p>
                      {element.Source}: <span>{element.Value}</span>
                    </p>
                  );
                })}
            </div>
          )}
        </div>
      </div>
      <div className={styles.bookmark}>
        <Bookmark info={item} />
      </div>
    </div>
  );
};
export default DetailInfo;
