import { useEffect } from 'react';
import {fetchPlayers} from '../API';
import {useState} from "react";
import Player from "./Player";
import Form from "./Form"
import SearchBar from "./SearchBar"
const Players = ({players, setPlayers}) =>{
useEffect(()=>{
    const getPlayers = async () =>{
const fetchedPlayers = await fetchPlayers();
    setPlayers(fetchedPlayers);
       
    }
    getPlayers();
},[])
{console.log(players)}
return <div >

        <Form setPlayers = {setPlayers}/>
        <SearchBar players = {players} setPlayers = {setPlayers}/>
        <h1>Puppy Bowl!!</h1>
   
    {players.map((player)=>{
        return (
        <Player key = {player.id} setPlayers = {setPlayers} id = {player.id} name = {player.name} image = {player.imageUrl} breed = {player.breed} />
        )
    })}
</div>
}

export default Players;