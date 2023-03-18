import { AppContext } from '@/components/context'
import {useContext, useState} from 'react'

const Pagination = () =>{
    const {results , input , setInput} = useContext(AppContext)
    let currentPage = parseInt(input.page);
    const totalPages = Math.ceil(results/10)
    let nextPage ;
    let prevPage ;
    const minLimit = 1 ;
    const maxLimit = 10 ;
    // build page numbers list based on total number of pages
    let pages = [];
    for (let i=1 ; i< totalPages+1 ; i++){
        pages.push(i)
    }

    const handlePrevPage = () =>{
        setInput(()=>{
            prevPage = currentPage - 1;
            if(prevPage <= 0){
                prevPage = 1 ;
            }
            return({...input , page : prevPage})
        })       
    }

    function handleNextPage() {
        setInput(()=>{
            nextPage = currentPage + 1 
            if( nextPage > totalPages){
                nextPage = totalPages;
            }
            return ({...input , page :nextPage})
        })
    }    
    const pageNumbers = pages.map(item =>{
        if (item <= maxLimit && item >= minLimit){
            return (
                <button 
                // className={currentPage === item? 'active' : null}
                key={item} 
                value={item}
                onClick={(event) => setInput({...input , page : event.target.value})}>
                    {item}
                </button>
            );
        }else {
            return null ;
        }
    })

    // page ellipsis
    let incrementEllipsis = null;
    if(pages.length > maxLimit){
        incrementEllipsis = <button onClick={handleNextPage}>&hellip;</button>
    }
    let decrementEllipsis = null;
    if(minLimit > 1){
        decrementEllipsis = <button onClick={handlePrevPage}>&hellip;</button>
    }


    return (
        <div>
            <button onClick={handlePrevPage}>Prev</button>
            {decrementEllipsis}
            {pageNumbers}
            {incrementEllipsis}
            {/* {pages.map((number , index)=>{
                return(
                    <button 
                    key={index}
                    value={number}
                    onClick={(event) => setInput({...input , page : event.target.value})}>
                        {number}
                    </button>
                )
            })} */}
            <button onClick={handleNextPage}>Next</button>
        </div>
    )
    
}
export default Pagination;