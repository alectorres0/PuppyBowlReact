import { useEffect , useState } from "react"
import {deletePlayer, fetchPlayers} from "../API"
import Details from './Details'
import {useNavigate} from 'react-router-dom'
import { Routes, Route, Link } from "react-router-dom"

const Player = ({id, name, image, breed, setPlayers}) => {
const [dog, setDog] = useState({})
useEffect(() => {
    setDog({
        dogname: name,
        dogimage: image,
        dogbreed: breed
    });
}, []);

   
        const handleDelete = async () =>{
            await deletePlayer(id);
            const players = await fetchPlayers()
            setPlayers(players);
        }
   
   
return (
    
    <div className = "playerdiv">
        <h2>{dog.dogname}</h2>
        <p>Breed: {dog.dogbreed}</p>
        <img src = {dog.dogimage}></img>
        <button onClick = {()=> {handleDelete()}}>Delete</button>
        <button id = {id}><Link to={`/details/${id}`}>Details</Link></button>
    </div>
)
}

export default Player
