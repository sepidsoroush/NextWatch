import { AppContext } from '@/components/context'
import {useContext} from 'react'
import Link from 'next/link'

const MoviesList = () =>{
    const {searchedMovies} = useContext(AppContext);
    return(
        <div>
            {searchedMovies? <h1>movie list</h1> : null}
            {searchedMovies? searchedMovies.map((item)=>{
                const {
                    imdbID : id ,
                    Title : title ,
                    Year : year ,
                    Type : type ,
                    Poster : poster} = item;
                return(
                    <Link href={`/${id}`}>
                        <article key={id}>
                            <p>{title}</p>
                            <p>{year}</p>
                            <p>{type}</p>
                            <img src={poster} alt={title} />
                        </article>
                    </Link>
                )        
            }):null}
        </div>
    );
}
export default MoviesList;