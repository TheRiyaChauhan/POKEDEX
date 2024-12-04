
import './App.css'
import CustomRoutes from './components/Routes/CustomRoutes'
import {Link} from 'react-router-dom'

function App() {
 
  return (
    <div>
      <h1 id="pokedex-heading">
      <Link to="/"> Pokedex </Link>
      </h1>
      <CustomRoutes />
    </div>
  )
}

export default App
