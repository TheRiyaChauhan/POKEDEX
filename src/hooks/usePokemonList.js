import { useEffect, useState } from 'react';
import axios from 'axios';




function usePokemonList(){

    const[pokemonListState, setPokemonListState] = useState({
        pokemonList: [],
        isLoading: true,
        pokedexUrl:'https://pokeapi.co/api/v2/pokemon/',
        nextUrl: "",
        prevUrl: "",
    })

    


    async function downloadPokemons () {

       
        setPokemonListState({...pokemonListState, isLoading:true})

        const response = await axios.get(pokemonListState.pokedexUrl)


        
        setPokemonListState((state)=>({
            ...state, 
            nextUrl:response.data.next,
            prevUrl:response.data.previous
         }))


        const pokemonResults = response.data.results 
        const pokemonResultPromise =  pokemonResults.map((pokemon)=> axios.get(pokemon.url))
        const pokemonData = await axios.all(pokemonResultPromise)
       
        const res = pokemonData.map((pokedata) =>{
            const Pokemon = pokedata.data
            return{
                id: Pokemon.id,
                name: Pokemon.name,
                image:(Pokemon.sprites.other)? Pokemon.sprites.other.dream_world.front_default : Pokemon.sprites.front_shiny,
                types: Pokemon.types
            }
               
        })
       
        setPokemonListState((state)=>({
            ...state, 
            pokemonList: res,
            isLoading:false
         }))


    } 

    useEffect(()=>{
        downloadPokemons()
    },[pokemonListState.pokedexUrl])

    return{pokemonListState, setPokemonListState}

}

export default  usePokemonList;