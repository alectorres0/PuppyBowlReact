import { useEffect, useState } from "react";
import { fetchPlayers } from "../API";

const SearchBar = ({players, setPlayers}) =>{
    const getPlayers = async()=>{
        let input = document.getElementById("search");
        input.value =""
        players = await fetchPlayers()
        setPlayers (players)
    }
    
    
    const searchFor = (list) =>{
        let input = document.getElementById("search");
        let value = input.value;
        
        const newList = list.filter((dog)=>{
            return (dog.name.indexOf(value) != -1 );
        })
        setPlayers(newList);
        
    }
    



    return (
        <>
    <input type="text" id="search"  onKeyUp = {()=>{searchFor(players)}} placeholder="Search for dog.."></input>
    <button onClick = {getPlayers}>reset</button>
    </>
    )
}

export default SearchBar;