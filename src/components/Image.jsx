import { useSelector } from "react-redux";

export default function Image() {
  const image_default = "../assets/question_mark.png";
  const sprite = useSelector((state) => state.pokemon.misteryPokemon?.sprite);
  const reveal = useSelector((state) => state.pokemon.reveal);

  const image = (sprite) ? sprite : image_default
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
