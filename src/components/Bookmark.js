import { useState } from 'react'
import {FaRegBookmark , FaBookmark} from "react-icons/fa";

const getLocalStorage = () =>{
    let list = localStorage.getItem('list');
    if (list) {
        return (list =JSON.parse(localStorage.getItem('list')));
    } else {
        return [];
    }
}

const Bookmark = ({items}) =>{
    const [list , setList] = useState(getLocalStorage());
    const [booked , setBooked] = useState(false)
    const handleBookmark = (e)=>{
        e.preventDefault();
        if (!booked){
            const newItem = {id : items.imdbID , title : items.Title}
            setList([...list , newItem])

            setBooked(true)
        }else{
            setList(list.filter((element)=> element.id !== items.imdbID))
            setBooked(false)
        }


    }
    console.log(list)
    return (
        <div>
            <div
            onClick={handleBookmark}
            key={list.id}
            items={list}
            >
                {booked? <FaBookmark /> : <FaRegBookmark />}
                <p>{booked?'Remove from Watchlist' : 'Add to Watchlist'}</p>
            </div>
        </div>
    )

}
export default Bookmark;