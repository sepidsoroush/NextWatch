import { AppContext } from '@/context/AppContext'
import {useContext, useState} from 'react'
import styles from '../styles/Pagination.module.css'

const Pagination = () =>{
    const {results , input , setInput} = useContext(AppContext)
    const totalPages = Math.ceil(results/10)
    const [minLimit , setMinLimit] = useState(0) ;
    let [maxLimit , setMaxLimit] = useState(10) ;
    const pagesLimit = 10;

    // build page numbers list based on total number of pages
    let pages = [];
    for (let i=1 ; i< totalPages+1 ; i++){
        pages.push(i)
    }

    const handlePrevPage = () =>{
        if (parseInt(input.page)!==2 && 
        (parseInt(input.page) -1)%pagesLimit ===0){
        setMaxLimit(maxLimit -pagesLimit) ;
        setMinLimit(minLimit -pagesLimit) ;
        }
        setInput(()=>{
            let prevPage = (parseInt(input.page)- 1) ;
            if(prevPage <= 0){
                prevPage = 1 ;
            }
            return({...input , page : prevPage})
        })
    }

    const handleNextPage = () => {
        if ((parseInt(input.page) +1)%pagesLimit ===1){
            setMaxLimit(maxLimit +pagesLimit) ;
            setMinLimit(minLimit +pagesLimit) ;
        }
        setInput(()=>{
            let nextPage = (parseInt(input.page)+ 1) 
            if( nextPage >= totalPages){
                nextPage = totalPages;
            }
            return ({...input , page :nextPage})
        })
    }
    
    const pageNumbers = pages.map(number =>{
        if (number <= maxLimit && number > minLimit){
            return (
                <button 
                className={`${styles.button} ${styles.numbers}`}
                style={
                    (parseInt(input.page) == number) ?{
                        backgroundColor :  '#f5c518' ,
                        color : 'white' ,
                        border : '1px solid #f5c518'}
                   : null}
                key={number} 
                value={number}
                onClick={(event) => setInput({...input , page : Number(event.target.value)})}>
                    {number}
                </button>
            );
        }else {
            return null ;
        }
    })

    // page ellipsis
    let incrementEllipsis = null;
    if(pages.length > maxLimit){
        incrementEllipsis = <button 
        className={styles.ellipsis}
        onClick={()=>{
            setMaxLimit(maxLimit +pagesLimit);
            setMinLimit(minLimit +pagesLimit);
        }}>&hellip;</button>
    }
    let decrementEllipsis = null;
    if(minLimit > 1){
        decrementEllipsis = <button 
        className={styles.ellipsis}
        onClick={()=>{
            setMaxLimit(maxLimit -pagesLimit);
            setMinLimit(minLimit -pagesLimit);
        }}>&hellip;</button>
    }

    return (
        <div className={styles.container}>
            <button 
                className={`${styles.controller} ${styles.button}`}
                onClick={handlePrevPage}>&lt;&lt;</button>
                {decrementEllipsis}
                {pageNumbers}
                {incrementEllipsis}
            <button 
                className={`${styles.controller} ${styles.button}`}
                onClick={handleNextPage}>&gt;&gt;</button>
        </div>
    )
    
}
export default Pagination;