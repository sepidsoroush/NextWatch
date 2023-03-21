import { useState } from "react";
import {FaRegBookmark , FaBookmark} from "react-icons/fa";

const getLocalStorage = () =>{
    let list = localStorage.getItem('list');
    if (list) {
        return (list =JSON.parse(localStorage.getItem('list')));
    } else {
        return [];
    }
}

const WatchList = () =>{
    const [item , setItem] = useState(null);
    const [booked , setBooked] = useState(false);

    return (
        <div>
            {booked? <FaBookmark /> : <FaRegBookmark />}
        </div>
    )

}
export default WatchList;