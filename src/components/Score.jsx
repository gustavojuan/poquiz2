import { useSelector } from "react-redux"

export default function Score(){

    const score = useSelector(({pokemon})=> pokemon.score)
    return (
        <div id="score">
        Score: {score}
      </div>
    )
}