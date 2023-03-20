import {useRouter} from 'next/router'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import axios from 'axios'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import styles from '../styles/Movie.module.css'
import { FaArrowLeft , FaAward , FaStar , FaFilm } from "react-icons/fa"

export default function Movie() {
    // declare varibles
    const router = useRouter()
    const {id} = router.query
    const [item , setItem] = useState({})
    const [showCredits , setShowCredits] = useState(false);
    const [showAwards , setShowAwards] = useState(false);
    const [showRatings , setShowRatings] = useState(false);
    const url ='https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png'


    const findMovie = ()=>{
        axios
            .get(`http://www.omdbapi.com/?apikey=6749959a&i=${id}`)
            .then((response) => {
                setItem(response.data);
            })
            .catch((error) => {
                console.log(error)});
    }; 
    useEffect(()=>{
        findMovie();
    } , []);
    return (
        <div className={`${styles.body} ${inter.className}`}>
            <div className={styles.container}>
                <div className={styles.main}>
                    <div>
                        <img 
                        style={item.Poster === 'N/A' ?{width:'240px' , height:'320px'}:null}
                        src={item.Poster === 'N/A' ? url : item.Poster} 
                        alt={item.Title} />
                    </div>
                    <div className={styles.right}>
                        <div className={styles.header}>
                            <h1 className={styles.title}>{item.Title}</h1>
                            <p className={styles.headerInfo}>{item.Type} • {item.Year} • {item.Rated} • {item.Runtime}</p>
                        </div>
                        <div>
                            {item.Genre ? item.Genre.split(', ').map((element)=>{
                                return(
                                    <span className={styles.genre}>{element}</span>
                                )
                            }) : null}
                        </div>
                        <div>
                            <p className={styles.plot}>{item.Plot}</p>
                        </div>
                        <div
                            className={styles.infoContainer}
                            onClick={()=>(setShowCredits(!showCredits))}>
                            <p className={styles.infoTitle}>
                                <FaFilm  className={styles.icon}/>
                                Top credits
                            </p>
                            {showCredits ? 
                            <div 
                            className={styles.infoDetails}>
                                <p>Actors: <span>{item.Actors}</span></p>
                                <p>Writer: <span>{item.Writer}</span></p>
                                <p>Director: <span>{item.Director}</span></p>
                            </div> : null}
                            
                        </div>
                        <div 
                            className={styles.infoContainer}
                            onClick={()=>(setShowAwards(!showAwards))}>
                            <p className={styles.infoTitle}>
                                <FaAward className={styles.icon} />Awards
                            </p>
                        {showAwards? 
                        <div className={styles.infoDetails}>
                            <p>{item.Awards}</p>
                            </div> : null}
                        </div>
                        <div
                            className={styles.infoContainer}
                            onClick={()=>(setShowRatings(!showRatings))}>
                            <p className={styles.infoTitle}>
                                <FaStar className={styles.icon} />Ratings
                            </p>
                            {showRatings? 
                            <div className={styles.infoDetails}>
                            {item.Ratings? item.Ratings.map((element)=>{
                                return(
                                    <p>{element.Source}: <span>{element.Value}</span></p>
                                )
                            }): null}
                            </div> : null}
                        </div>
                    </div>
                </div>
                <div className={styles.backContainer}>
                    <Link 
                        className={styles.backButton}
                        href='/'>
                        <FaArrowLeft className={styles.icon} /><p>Back</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}