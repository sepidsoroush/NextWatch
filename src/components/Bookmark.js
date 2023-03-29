import { useState } from 'react'
import {FaRegBookmark , FaBookmark} from "react-icons/fa";
import { database} from '../../firebase'
import { collection , doc , deleteDoc , setDoc , getDoc} from 'firebase/firestore';


const Bookmark = ({items , booked}) =>{
    const dbInstance = collection(database, 'watchlist');


    const checkBookmark = async ()=>{
        const docRef = doc(database, "watchlist", items.imdbID);
        try {
            const docSnap = await getDoc(docRef);
            console.log(docSnap.data());
            setBooked(true);
        } catch(error) {
            console.log(error)
        }
    }

    const handleBookmark = async(e)=> {
        e.preventDefault();
        if (!booked){
            await setDoc(doc(dbInstance , items.imdbID) , {
                id : items.imdbID ,
                title : items.Title
            })
            setBooked(true)
        }else{
            const collectionById = doc(database, 'watchlist', items.imdbID)
            deleteDoc(collectionById)
            setBooked(false)
        }
    }

    return (
        <div onLoad={checkBookmark}>
            <div
            onClick={handleBookmark}
            >
                {booked? <FaBookmark /> : <FaRegBookmark />}
                {/* <p>{booked?'Remove from Watchlist' : 'Add to Watchlist'}</p> */}
            </div>
        </div>
    )

}
export default Bookmark;