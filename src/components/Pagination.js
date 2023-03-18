import { AppContext } from '@/components/context'
import {useContext, useState} from 'react'

const Pagination = () =>{
    const {results , input , setInput} = useContext(AppContext)
    let currentPage = parseInt(input.page);
    const totalPages = Math.ceil(results/10)
    let nextPage ;
    let prevPage ;
    // const [startNum , setStartNum] = useState(0);
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
        // setStartNum(()=>{
        //     if(startNum <=5){
        //         return 0;
        //     }
        //     return (startNum-1)
        // })        
    }

    function handleNextPage() {
        setInput(()=>{
            nextPage = currentPage + 1 
            if( nextPage > totalPages){
                nextPage = totalPages;
            }
            return ({...input , page :nextPage})
        })
        // setStartNum(()=>{
        //     if(startNum >5 && startNum+4 > totalPages){
        //         return totalPages;
        //     }else if (startNum <=5){
        //         return (startNum)
        //     }
        //     return (startNum+1)
        // }) 
    }
    // let newArray = numberList.slice(startNum , startNum+10);
    
    const pageNumbers = pages.map(item =>{
        if (item <= totalPages && item > 0){
            return (
                <button 
                className={currentPage === item? 'active' : null}
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
    return (
        <div>
            <button onClick={handlePrevPage}>Prev</button>
            {pageNumbers}
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