import axios from 'axios'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './PokemonDetails.css'

function PokemonDetails({ pokemonName }){
   
    const[pokemon, setPokemon] = useState()

    const {id} = useParams();

    const [error, setError] = useState(false);

    const endpoint = pokemonName ? pokemonName.toLowerCase() : id;


    async function downloadDetails() {
        
        try{
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${endpoint}`)
        setPokemon({
            name: response.data.name.toUpperCase(),
            image: response.data.sprites.other.dream_world.front_default,
            weight: response.data.weight,
            height: response.data.height,
            types: response.data.types.map((t)=>t.type.name)
    })}
    catch(e){
        setError(true);
    }
        
    }

    useEffect(()=>{
        downloadDetails()
    },[id, pokemonName])

    if(!pokemon && !error) {
        return (<div className='error-text'>Loading...</div>)
    
    }

    if(!pokemon && error){
        return <h1 className='error-text'>Not Found</h1>
    }

     return(
       <div className='pokemon-details-wrapper'>
        <div className='pokemon-details-name'>Name:{pokemon.name}</div>
        <img  className='pokemon-details-image' src={pokemon.image} />
        <div>Height:{pokemon.height}</div>
        <div>Weight:{pokemon.height}</div>
        <div className='pokemon-details-types'>
            {pokemon.types && pokemon.types.map((t)=> <div key={t}> {t} </div>)}
        </div>

       </div>
     )
}

export default PokemonDetails;