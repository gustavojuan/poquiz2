import { useDispatch } from "react-redux";
import { randomPokemonIds } from "../lib/pokemon";
import { getAsyncPokemon } from "../redux/pokemonSlice";

export default function Next(){

  const dispatch = useDispatch();

  const handleOnClick = ()=> {        
      dispatch(getAsyncPokemon(randomPokemonIds(4))); 
  }

    return (
        <div className="next-container">
        <button className="next" onClick={()=> handleOnClick()}>Next question</button>
      </div>
    )
}