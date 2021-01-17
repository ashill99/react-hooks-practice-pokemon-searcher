import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({search, pokeData, setPokeData, isClicked, setIsClicked, filteredPoke}) {

  return (
    <Card.Group itemsPerRow={6}>
      <h1>Hello From Pokemon Collection</h1>
      <PokemonCard pokedata={filteredPoke} isClicked={isClicked} setIsClicked={setIsClicked} />
    </Card.Group>
  );
}

export default PokemonCollection;
