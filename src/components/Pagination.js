import { AppContext } from '@/components/context'
import {useContext, useState} from 'react'

const Pagination = () =>{
    const {results , input , setInput} = useContext(AppContext)
    // let currentPage = parseInt(input.page);
    const totalPages = Math.ceil(results/10)
    let nextPage ;
    let prevPage ;
    let numberList = [];
    for (let i=1 ; i< totalPages+1 ; i++){
        numberList.push(i)
    }

    const handlePrevPage = () =>{
        setInput(()=>{
            prevPage = parseInt(input.page) - 1;
            if(prevPage <= 0){
                prevPage = 1 ;
            }
            return({...input , page : prevPage})
        })
    }

    function handleNextPage() {
        setInput(()=>{
            nextPage = parseInt(input.page) + 1 
            if( nextPage > totalPages){
                nextPage = totalPages;
            }
            return ({...input , page :nextPage})
        })
    }

    console.log(numberList)
    return (
        <div>
            <button onClick={handlePrevPage}>Prev</button>
            {numberList.map((number , index)=>{
                return(
                    <button 
                    key={index}
                    value={number}
                    onClick={(event) => setInput({...input , page : event.target.value})}>
                        {number}
                    </button>
                )
            })}
            <button onClick={handleNextPage}>Next</button>
        </div>
    )
    
}
export default Pagination;