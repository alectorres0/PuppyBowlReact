import { useState } from 'react'
import Players from './components/Players'
import './App.css'
import { Routes, Route, Link } from "react-router-dom"
import Details from "./components/Details"


function App() {

  const [players,setPlayers] = useState([])
  return (
    <div>
   <Routes>
   <Route path = "/" element = {<Players players = {players} setPlayers = {setPlayers}/>}/>
    <Route path = "/details/:id" element = {<Details/>}/>
   </Routes>
   </div>

  )
}

export default App
