import { AppContext } from '@/components/context'
import {useContext} from 'react'

const Pagination = () =>{
    const {results , input , setInput} = useContext(AppContext)
    const totalPages = Math.ceil(results/10)
    let numberList = [];
    for (let i=1 ; i< totalPages+1 ; i++){
        numberList.push(i)
    }
    return (
        <div>
            <ul>
                {numberList.map((number)=>{
                    return(
                        <li key={number}>{number}</li>
                    )
                })}
            </ul>
        </div>
    )
    
}
export default Pagination;