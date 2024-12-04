import { useState } from "react";
import PokemonDetails from "../PokemonDetails/PokemonDetails";
import PokemonList from "../PokemonList/PokemonList";
import Search from "../search/Search";
import "./Pokedex.css"

function Pokedex(){
   const [searchTerm, setSearchTerm] = useState('');
 return(
    <div className="pokedex-wrapper">
    
    <Search updateSearchTerm={setSearchTerm}/>
    {searchTerm ? <PokemonDetails pokemonName={searchTerm}/> : <PokemonList />}
    </div>
 )
}

export default Pokedex;