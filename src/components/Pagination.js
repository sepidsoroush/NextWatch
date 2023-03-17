import { AppContext } from '@/components/context'
import {useContext} from 'react'

const Pagination = () =>{
    const {results , input , setInput} = useContext(AppContext)
    const totalPages = Math.ceil(results/10)
    let numberList = [];
    for (let i=0 ; i< totalPages ; i++){
        numberList.push(i)
    }
    return (
        <div>
            <ul>
                {numberList.map((number , index)=>{
                    return(
                        <li key={index}>{number}</li>
                    )
                })}
            </ul>
        </div>
    )
    
}
export default Pagination;