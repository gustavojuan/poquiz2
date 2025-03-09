import { useSelector } from "react-redux";
import imagen_default from '../assets/question_mark.png'

export default function Image() {

  const sprite = useSelector((state) => state.pokemon.misteryPokemon?.sprite);
  const reveal = useSelector((state) => state.pokemon.reveal);

  const image = (sprite) ? sprite : imagen_default
  return (
    <div>
      <img
        id="image"
        className={(reveal)?'':'black'}
        src={image}
        alt="Pokemon image"
      />
    </div>
  );
}
