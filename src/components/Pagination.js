import { AppContext } from '@/components/context'
import {useContext} from 'react'

const Pagination = () =>{
    const {results , input , setInput , getData} = useContext(AppContext)
    const totalPages = Math.ceil(results/10)
    let numberList = [];
    for (let i=1 ; i< totalPages+1 ; i++){
        numberList.push(i)
    }
    return (
        <div>
            {numberList.map((number , index)=>{
                return(
                    <button 
                    key={index}
                    value={number}
                    onClick={
                        (event) => setInput({...input , page : event.target.value})
                    }
                    >
                        {number}
                    </button>
                )
            })}
        </div>
    )
    
}
export default Pagination;