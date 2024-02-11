
import {useState} from "react"
import {postPlayer, fetchPlayers} from "../API"
const Form = ({setPlayers}) =>{
    const [name, setName] = useState("")
    const [breed, setBreed] = useState("")
    const [id, setID] = useState("")

async function handleSubmit(e){
    e.preventDefault();
    await postPlayer(name, breed, id)
    const players = await fetchPlayers();
    setPlayers(players);
}
return (
    <div className = "form">
        <h2>Create A Player:</h2>
        <form onSubmit = {handleSubmit}>
            <label>
                Name:
                <input value = {name} onChange={(e)=>{setName(e.target.value)}}></input>
            </label>
            <label>
                Breed:
                <input value = {breed} onChange={(e)=>{setBreed(e.target.value)}}></input>
            </label>
            <label>
                ID:
                <input value = {id} onChange={(e)=>{setID(e.target.value)}}></input>

            </label>
        <button>Submit</button>

        </form>
    </div>
)
}


export default Form;