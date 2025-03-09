import { useDispatch, useSelector } from "react-redux";
import { checkAnswer } from "../redux/pokemonSlice";

export default function Answers() {


const pokemons = useSelector(({ pokemon }) => pokemon.pokemons); 
const misteryPokemon = useSelector(({ pokemon }) => pokemon.misteryPokemon); 
const reveal = useSelector(({ pokemon }) => pokemon.reveal); 
const userAnswer = useSelector(({ pokemon }) => pokemon.userAnswer); 
const dispatch   = useDispatch();


const handleOnClick = (e,nombre)=> {    
    dispatch(checkAnswer(nombre));
}


  return (
    <div id="answers">

        {
            pokemons.map(({nombre},index)=> {
                let className = "answer";

                if(reveal){                    
                    if(nombre === misteryPokemon.nombre){
                        className += ' correct'
                    }else {
                        if(nombre === userAnswer)
                        className += ' wrong';
                    }
                }
                return (                    
                    <div className={className} key={index}>
                     <button id="answer-1" onClick={(e)=> handleOnClick(e,nombre)}>{nombre}</button>
                    </div>
                )
            })
        }
    
    </div>
  );
}
