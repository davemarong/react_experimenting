import React from "react";

const DisplayPokemon = ({ pokemon }) => {
  return (
    <div>
      <p>Pokemon:</p>
      <ul>
        <li>{pokemon.id}</li>
        <li>{pokemon.name}</li>
        <img src={pokemon.sprites?.front_default} />
      </ul>
    </div>
  );
};

export default DisplayPokemon;
