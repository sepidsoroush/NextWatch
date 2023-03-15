import { AppContext } from '@/pages/context';
import {useContext} from 'react';

const MoviesList = () =>{
    const {searchedMovies} = useContext(AppContext);
    return(
        <div>
            <h1>movie list</h1>
            {searchedMovies.map((item)=>{
                const {imdbID,Title ,Year,Type,Poster} = item;
                return(
                    <ul>
                        <li key={imdbID}>
                            <p>{Title}</p>
                            <p>{Year}</p>
                            <p>{Type}</p>
                            <img src={Poster} alt={Title} />
                        </li>
                    </ul>
                )        
            })}
        </div>
    );
}
export default MoviesList;