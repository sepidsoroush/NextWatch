// import { useGlobalContext } from "./App";
const SearchBox = ({searchItem , setInfo}) =>{
    // const {setInfo} = useGlobalContext();
    return(
        <div>
            <form 
                onSubmit={()=>{searchItem()}}
                action="">
                <input 
                    type="text"
                    placeholder='Title'
                    onChange={event => {setInfo({title : event.target.value})}}
                />
               
                <input 
                    type="text"
                    placeholder='Year'
                    onChange={event => setInfo({year : event.target.value})}
                />
                <input 
                    type="text"
                    placeholder='Type'
                    onChange={event => setInfo({type : event.target.value})}
                />
                <button>
                    search
                </button>
            </form>
        </div>
    );
}
export default SearchBox;