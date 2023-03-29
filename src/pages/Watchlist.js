
import { useEffect, useState } from 'react'
import { database} from '../../firebase'
import { collection , doc , deleteDoc , setDoc , getDocs} from 'firebase/firestore';
import Link from 'next/link'
import { async } from '@firebase/util';
import Bookmark from '@/components/Bookmark';



const Watchlist = () =>{
    const data = [];
    const [list , setList] = useState([])
    const [booked , setBooked] = useState(false);

    const getData = async () =>{
        try{
            const querySnapshot =await getDocs(collection(database, "watchlist"));
            querySnapshot.forEach((doc) => {
                // console.log(doc.data());
                data.push(doc.data())
                setList(data)
            });
        }catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        getData();
    },[list])

    return (
        <div>
            <div>
                {list.map((item)=>{
                    const {id , title} = item;
                    return(
                        <div key={id}>
                            <Bookmark booked={booked} />
                            <Link href={`${id}`}>{title}</Link>
                        </div>
                    )
                })}
            </div>

            <Link href='/'>Home Page </Link>
        </div>
    )
}
export default Watchlist;