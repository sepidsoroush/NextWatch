const SearchBox = ({handleSubmit , setInfo , info}) =>{
    return(
        <div>
            <form 
                onSubmit={()=>handleSubmit}
                >
                <input 
                    type="text"
                    placeholder='Title'
                    onChange={event => {setInfo({...info , title :event.target.value})}}
                />
                <input 
                    type="text"
                    placeholder='Year'
                    onChange={event => setInfo({...info ,year : event.target.value})}
                />
                <input 
                    type="text"
                    placeholder='Type'
                    onChange={event => setInfo({...info , type : event.target.value})}
                />
                <button>
                    search
                </button>
            </form>
        </div>
    );
}
export default SearchBox;