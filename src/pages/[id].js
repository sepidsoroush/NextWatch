import {useRouter} from 'next/router'
import { useEffect, useState } from 'react'
import axios from 'axios'
export default function Movie() {
    const router = useRouter()
    const {id} = router.query

    const findMovie = ()=>{
        axios
            .get(`http://www.omdbapi.com/?apikey=6749959a&i=${id}`)
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error)});
    }; 
    useEffect(()=>{
        findMovie();
    } , []);

    return (
        <h1>
            Test : {id}
        </h1>
    )
}