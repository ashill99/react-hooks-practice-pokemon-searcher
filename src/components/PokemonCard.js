import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({pokedata, isClicked, setIsClicked}) {

  console.log(pokedata)

const thePokeCard = pokedata.map((poke) => {

  return <Card>
  <div  >
    <div className="image">
      <img 
      src={isClicked ? poke.sprites.front : poke.sprites.back} 
      alt={poke.name}
      onClick={() => setIsClicked(!isClicked)}
      />
    </div>
    <div className="content">
      <div className="header">{poke.name}</div>
    </div>
    <div className="extra content">
      <span>
        <i className="icon heartbeat red" />
        {poke.hp}
      </span>
    </div>
  </div>
</Card>
})

  return (
    <>
    {thePokeCard}    
  </>);
}

export default PokemonCard;
