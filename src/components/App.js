import React from "react";
import { useState } from "react";
import axios from "axios"
import SearchBox from "./SearchBox";

const App = ()=>{
//declare variables
const [info , setInfo] = useState({
    id : '',
    title : '',
    year : '',
    type : '',
    poster : ''
});
console.log(info);
const handleSubmit = ()=>{
    axios.get(`http://www.omdbapi.com/?apikey=6749959a&s=${info.title}&type=${info.type}&y=${info.year}`)
    .then((response) => {
        const searchedMovies = response.data.Search;
        setInfo({
            id : searchedMovies.imdbID ,
            title : searchedMovies.Title ,
            year : searchedMovies.Year ,
            type : searchedMovies.Type ,
            poster : searchedMovies.Poster
        })
        console.log(response.data.Search)})
    .catch((error) => {
        console.log(error)});
}
    return(
        <div>
            <SearchBox
                setInfo = {setInfo}
                searchItem = {handleSubmit}
            />            
        </div>
    );
}

export default App;