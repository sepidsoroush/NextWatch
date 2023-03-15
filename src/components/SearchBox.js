import { AppContext } from '@/components/context';
import {useContext} from 'react';

const SearchBox = () =>{
    const {input , setInput , getData} = useContext(AppContext);
    return(
        <div>
            <input 
                type="text"
                placeholder='Title'
                onChange={event => {setInput({...input , title :event.target.value})}}
            />
            <input 
                type="text"
                placeholder='Year'
                onChange={event => setInput({...input ,year : event.target.value})}
            />
            <input 
                type="text"
                placeholder='Type'
                onChange={event => setInput({...input , type : event.target.value})}
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