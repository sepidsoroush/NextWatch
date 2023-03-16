import { AppContext } from '@/components/context'
import {useContext} from 'react'

const Alert = () =>{
    const {error} = useContext(AppContext)
    return(
        <div>
            {error? <p>{error}</p> : null}
        </div>
    )
}
export default Alert;