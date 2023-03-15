import { AppContext } from '@/pages/context';
import {useContext} from 'react';

const MoviesList = () =>{
    const {searchedMovies} = useContext(AppContext);
    console.log(searchedMovies);
    return(
        <div>
            <h1>movie list</h1>

        </div>
    )
    // 
    // return(
    //     <div>
    //         {searchedMovies.map((movie)=>{
    //             const {imdbID,Title ,Year,Type,Poster} = movie;
    //             <ul>
    //                 <li>
    //                     <div>
    //                         <p>{imdbID}</p>
    //                         <h1>{Title}</h1>
    //                         <h6>{Year}</h6>
    //                         <h6>{Type}</h6>
    //                         <img src={Poster} alt={Title} />
    //                     </div>
    //                 </li>
    //             </ul>
    //         })}
    //     </div>
    // )
}
export default MoviesList;