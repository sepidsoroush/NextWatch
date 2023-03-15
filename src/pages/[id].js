import {useRouter} from 'next/router'
import { useEffect, useState } from 'react'
import axios from 'axios'
export default function Movie() {
    const router = useRouter()
    const {id} = router.query
    const [item , setItem] = useState({})
    let x = {
        Awards: "",
        Ratings :[],
        totalSeasons: ""
    }

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
        <div>
            <div>
                <h1>{item.Title}</h1>
                <p>{item.Type} • {item.Year} • {item.Rated} • {item.Runtime}</p>
            </div>
            <div>
                <img src={item.Poster} alt={item.Title} />
            </div>
            <div>
                {item.Genre ? item.Genre.split(', ').map((element)=>{
                    return(
                        <p>{element}</p>
                    )
                }) : null}
            </div>
            <div>
                <p>{item.Plot}</p>
            </div>
            <div>
                <p>IMDB rate: <span>{item.imdbRating}</span>/<span>{item.imdbVotes}</span></p>
                <p>Metascore: <span>{item.Metascore}</span></p>
                <div>
                {item.Ratings? item.Ratings.map((element)=>{
                    return(
                        <p>{element.Source}: <span>{element.Value}</span></p>
                    )
                }): null}
                </div>
            </div>
            <div>
                <p>Top credits</p>
                <p>Actors: <span>{item.Actors}</span></p>
                <p>Writer: <span>{item.Writer}</span></p>
                <p>Director: <span>{item.Director}</span></p>
            </div>
            <div>
                <p>Awards: {item.Awards}</p>
            </div>
        </div>
    )
}