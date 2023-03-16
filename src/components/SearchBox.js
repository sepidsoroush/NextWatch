import { AppContext } from '@/components/context';
import {useContext} from 'react';
import styles from '../styles/Search.module.css'
import { FaSearch } from "react-icons/fa";

const SearchBox = () =>{
    const {input , setInput , getData , handleKeypress} = useContext(AppContext);
    return(
        <div className={styles.searchBox}>
            <select 
                onChange={(event)=>{setInput({...input , type :event.target.value})}}
                className={styles.type}>
                <option value="">All</option>
                <option value="movie">Movie</option>
                <option value="series">TV Series</option>
                <option value="episode">Episode</option>
                <option value="game">Game</option>
            </select>
            <input 
                className={styles.input}
                type="text"
                placeholder='Search'
                required
                onChange={(event) => setInput({...input , title : event.target.value})}
                onKeyDown={handleKeypress} 
            />
            <button
                className={styles.button}
                onClick={()=> getData()}
            >
                <FaSearch style={{height : '100%'}} />
            </button>
        </div>
    );
}
export default SearchBox;