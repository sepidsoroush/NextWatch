import { AppContext } from '@/components/context';
import {useContext} from 'react';
import styles from '../styles/Search.module.css'

const SearchBox = () =>{
    const {input , setInput , getData} = useContext(AppContext);
    return(
        <div className={styles.searchBox}>
            <select onChange={(event)=>{setInput({...input , type :event.target.value})}}>
                <option value="">All</option>
                <option value="movie">Movie</option>
                <option value="series">TV Series</option>
                <option value="episode">Episode</option>
            </select>
            <input 
                type="text"
                placeholder='Search'
                onChange={event => setInput({...input , title : event.target.value})}
            />
            <button
                onClick={()=> getData()}
            >
                Search
            </button>
        </div>
    );
}
export default SearchBox;