import { useState , useEffect } from 'react'
import {FaRegBookmark , FaBookmark} from "react-icons/fa";
import {app , database} from '../../firebase'
import { collection , deleteDoc ,doc , setDoc , getDoc} from 'firebase/firestore';



const Bookmark = ({items}) =>{
    const [booked , setBooked] = useState(false)
    const dbInstance = collection(database, 'watchlist');

    // const checkBookmark = async ()=>{
    //     const docRef = doc(database, "watchlist", items.imdbID);
    //     try {
    //         const docSnap = await getDoc(docRef);
    //         setBooked(true);
    //         console.log(docSnap.data());
    //     } catch(error) {
    //         setBooked(false)

    //         console.log(error)
    //     }
    // }
    // useEffect(()=>{
    //     checkBookmark();
    // }, [])
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
            // .then(() => {
            //     console.log("Entire Document has been deleted successfully.")
            // })
            // .catch(error => {
            //     console.log(error);
            // })
        }
    }

    return (
        <div>
            <div
            onClick={handleBookmark}
            // key={list.id}
            // items={list}
            >
                {booked? <FaBookmark /> : <FaRegBookmark />}
                <p>{booked?'Remove from Watchlist' : 'Add to Watchlist'}</p>
            </div>
        </div>
    )

}
export default Bookmark;