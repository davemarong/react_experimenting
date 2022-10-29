import React from "react";

const UserGuess = ({
  pokemon,
  setPokemonGuessed,
  pokemonGuessed,
  userAnswer,
  setUserAnswer,
}) => {
  const userGuess = () => {
    if (userAnswer.toLowerCase() === pokemon.name.toLowerCase()) {
      console.log();
      setPokemonGuessed([...pokemonGuessed, userAnswer]);
    }
  };
  const handleUserAnswer = (e) => {
    setUserAnswer(e.target.value);
  };

  return (
    <div>
      <p>Who's that pokemon?</p>
      <input onChange={handleUserAnswer} />
      <button onClick={userGuess}>It's this pokemon!</button>
    </div>
  );
};

export default UserGuess;
