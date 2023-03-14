import React, { useState, useContext, createContext } from 'react'

const AppContext = createContext();
const AppProvider = ({childern})=>{
    const [searchedMovies , setSearchedMovies] = useState([]);
    const [input , setInput] = useState({
        title : 'friends',
        year : '',
        type : '',});

    axios.get(`http://www.omdbapi.com/?apikey=6749959a&s=${input.title}&type=${input.type}&y=${input.year}`)
    .then((response) => {
        setSearchedMovies(response.data.Search);
        console.log(searchedMovies);
    })
    .catch((error) => {
        console.log(error)});
        return(
            <AppContext.Provider 
            value={{input , setInput , searchedMovies}}>
                {childern}
            </AppContext.Provider>
        )
}
export const useGlobalContext = () =>{
    return useContext(AppContext)
}
export {AppContext , AppProvider}
