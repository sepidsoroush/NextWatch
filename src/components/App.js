import React from "react";
import { useState , useEffect} from "react";
import axios from "axios"
// import SearchBox from "./SearchBox";
import MoviesList from "./MovieList";
import { AppContext } from "@/pages/context";

const App = ()=>{
    const [searchedMovies , setSearchedMovies] = useState([]);
    const [input , setInput] = useState({
        title : 'friends',
        year : '',
        type : ''});
    
    const getData = async()=>{
        await axios
            .get(`http://www.omdbapi.com/?apikey=6749959a&s=${input.title}&type=${input.type}&y=${input.year}`)
            .then((response) => {
                setSearchedMovies(response.data.Search);
                console.log(searchedMovies);
            })
            .catch((error) => {
                console.log(error)});
    } 
    useEffect(()=>{
        getData();
    } , []);

    return(
        <AppContext.Provider value={{searchedMovies}}>
            <MoviesList />
        </AppContext.Provider>
        // <div>
        //     <button
        //     onClick={handleSubmit}>
        //         search
        //     </button>
        //     <MoviesList />
        //     <SearchBox
        //         info={info}
        //         setInfo = {setInfo}
        //         handleSubmit = {handleSubmit}
        //     />            
        // </div>
    );
}

export default App;