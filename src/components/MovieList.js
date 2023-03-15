import { AppContext } from '@/pages/context';
import {useContext} from 'react';

const MoviesList = () =>{
    const {searchedMovies} = useContext(AppContext);
    return(
        <div>
            <h1>movie list</h1>
            {searchedMovies.map((item)=>{
                const {
                    imdbID : id ,
                    Title : title ,
                    Year : year ,
                    Type : type ,
                    Poster : poster} = item;
                return(
                    <article key={id}>
                        <p>{title}</p>
                        <p>{year}</p>
                        <p>{type}</p>
                        <img src={poster} alt={title} />
                    </article>
                )        
            })}
        </div>
    );
}
export default MoviesList;