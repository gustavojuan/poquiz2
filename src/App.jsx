
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import Answers from './components/Answers'
import Image from './components/Image'
import { Loading } from './components/Loading'
import Next from './components/Next'
import Score from './components/Score'

import { randomPokemonIds } from './lib/pokemon'
import { useEffect } from 'react'
import { getAsyncPokemon } from './redux/pokemonSlice'

function App() {
 const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAsyncPokemon(randomPokemonIds(4)))
  }, [dispatch])
  
  const loading = useSelector(({pokemon:pokemonState})=> pokemonState.loading)

  console.log('loading', loading);
  return (
    <>
    
      {(loading) ?<Loading/>: '' }

      <Score />
      <Image />
      <Answers />
      <Next />




    </>
  )
}

export default App
