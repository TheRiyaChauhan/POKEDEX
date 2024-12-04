import {Routes , Route} from 'react-router-dom'
import Pokedex from '../Pokedex/Pokedex';
import PokemonDetails from '../PokemonDetails/PokemonDetails';

function CustomRoutes(){
    return(
        <Routes>
            <Route path="/POKEDEX" element={<Pokedex />}/>
            <Route path="/Pokemon/:id" element={<PokemonDetails />}/>
            
           
        </Routes>

    )
}

export default CustomRoutes;