import { useParams, Link } from 'react-router-dom';
import {fetchSingle} from "../API"
import { useEffect, useState } from 'react';

import "../Details.css"
const Details = () =>{
const [player,setPlayer] = useState({})
const {id} = useParams();

useEffect(()=>{
    const getPlayer = async() =>{
    setPlayer(await fetchSingle(id));
    console.log(id);
    }
    getPlayer();
},[id])

    return <div className = "dog">
        <h1>{player.name}</h1>
        <Link to="/">Home</Link>
         <img src = {player.imageUrl}></img>
        <h2>Breed: {player.breed}</h2>
        <h2>Status: {player.status}</h2>
        <h2>TeamID: {player.teamId}</h2>

    </div> 
}

export default Details;