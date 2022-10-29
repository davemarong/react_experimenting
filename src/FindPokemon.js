import React from "react";

const FindPokemon = ({ id, setId, setPokemon }) => {
  const url = "https://pokeapi.co/api/v2/pokemon/";

  const fetchPokemon = async () => {
    const response = await fetch(url + id);
    const result = await response.json();
    setPokemon(result);
  };
  const handleId = (event) => {
    setId(event.target.value);
  };

  return (
    <>
      <input onChange={handleId} />
      <button onClick={fetchPokemon}>Find pokemon by ID (number)</button>
    </>
  );
};

export default FindPokemon;
