import { AppContext } from '@/components/context'
import {useContext} from 'react'
import styles from '../styles/Error.module.css'

const Alert = () =>{
    const {error} = useContext(AppContext)
    return(
        <div className={styles.container}>
            {error? <p className={styles.error}>{error}</p> : null}
        </div>
    )
}
export default Alert;