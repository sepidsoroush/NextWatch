import { AppContext } from '@/components/context'
import {useContext, useState} from 'react'

const Pagination = () =>{
    const {results , input , setInput} = useContext(AppContext)
    const totalPages = Math.ceil(results/10)
    let numberList = [];
    let nextPage ;
    let prevPage ;
    let currentPage = parseInt(input.page);
    for (let i=1 ; i< totalPages+1 ; i++){
        numberList.push(i)
    }

    const [pages , setPages] = useState(currentPage)

    const handlePrevPage = () =>{
        setPages((currentPage)=>{
            prevPage = currentPage - 1;
            if(prevPage <= 0){
                prevPage = 1 ;
            }
            return(prevPage)
        })
        setInput({...input , page : prevPage})
    }

    function handleNextPage() {
        setPages((currentPage)=>{
            nextPage = currentPage + 1 
            if( nextPage > totalPages){
                nextPage = totalPages;
            }
            return (nextPage)
        })
        setInput({...input , page :nextPage})
    }
    console.log(pages)
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