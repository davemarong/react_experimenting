import React from "react";

const CorrectlyGuessedPokemon = ({ pokemonGuessed }) => {
  return (
    <div>
      <p>You have correctly guessed these pokemon:</p>
      <ul>
        {pokemonGuessed.map((pokemon) => {
          return <li key={pokemon}>{pokemon}</li>;
        })}
      </ul>
    </div>
  );
};

export default CorrectlyGuessedPokemon;
