import { AppContext } from '@/components/context'
import {useContext} from 'react'
import Link from 'next/link'
import styles from '../styles/List.module.css'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

const MoviesList = () =>{
    const {searchedMovies} = useContext(AppContext);
    return(
        <div className={styles.container}>
            {searchedMovies?<h1 className={`${styles.header} ${inter.className}`}>Search results:</h1> :null}
            {searchedMovies? searchedMovies.map((item)=>{
                const {
                    imdbID : id ,
                    Title : title ,
                    Year : year ,
                    Type : type ,
                    Poster : poster} = item;
                return(
                    <div className={inter.className}>
                        <Link href={`/${id}`}>
                            <div 
                            key={id}
                            className={styles.movie}>
                                <img src={poster} alt={title} className={styles.poster} />
                                <div className={styles.info}>
                                    <p className={styles.title}>{title}</p>
                                    <p className={styles.detail}>{year}</p>
                                    <p className={styles.detail}>{type}</p>
                                </div>                           
                            </div>
                        </Link>
                    </div>
                )        
            }):null}
        </div>
    );
}
export default MoviesList;