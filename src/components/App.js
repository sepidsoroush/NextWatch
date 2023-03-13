import axios from "axios";
const handleSubmit = ()=>{
    axios.get('http://www.omdbapi.com/?apikey=6749959a&s=inception&type=movie&y=2010')
    .then(response => console.log(response.data.Search))
    .catch(error => console.log(error));
}

const App = ()=>{
    return(
        <div>
            <button
            onClick={handleSubmit}
            >search</button>
        </div>
    );
}
export default App;