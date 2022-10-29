import { useState } from "react";
import CorrectlyGuessedPokemon from "./CorrectlyGuessedPokemon";
import DisplayPokemon from "./DisplayPokemon";
import FindPokemon from "./FindPokemon";
import UserGuess from "./UserGuess";

const App = () => {
  const [id, setId] = useState(1);
  const [pokemon, setPokemon] = useState("No pokemon");
  const [pokemonGuessed, setPokemonGuessed] = useState([]);
  const [userAnswer, setUserAnswer] = useState();

  const UserGuessProps = {
    pokemon: pokemon,
    setPokemonGuessed: setPokemonGuessed,
    pokemonGuessed: pokemonGuessed,
    userAnswer: userAnswer,
    setUserAnswer: setUserAnswer,
  };

  return (
    <>
      <FindPokemon id={id} setId={setId} setPokemon={setPokemon} />
      <DisplayPokemon pokemon={pokemon} />
      <UserGuess {...UserGuessProps} />
      <CorrectlyGuessedPokemon pokemonGuessed={pokemonGuessed} />
    </>
  );
};

export default App;
