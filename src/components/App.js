import React from "react";
import { useState } from "react";
import axios from "axios"
// import SearchBox from "./SearchBox";

const App = ()=>{
//declare variables
const [info , setInfo] = useState({
    id : '',
    title : 'batman',
    year : '',
    type : '',
    poster : ''
});
const handleSubmit = ()=>{
    axios.get(`http://www.omdbapi.com/?apikey=6749959a&s=${info.title}&type=${info.type}&y=${info.year}`)
    .then((response) => {
        const searchedMovies = response.data.Search;
        // setInfo({
        //     id : searchedMovies.imdbID ,
        //     title : searchedMovies.Title ,
        //     year : searchedMovies.Year ,
        //     type : searchedMovies.Type ,
        //     poster : searchedMovies.Poster
        // })
        console.log(searchedMovies)
        // console.log(info)

    })
    .catch((error) => {
        console.log(error)});
}
    return(
        <div>
            <button
            onClick={handleSubmit}>
                search
            </button>
            {/* <SearchBox
                info={info}
                setInfo = {setInfo}
                handleSubmit = {handleSubmit}
            />             */}
        </div>
    );
}

export default App;