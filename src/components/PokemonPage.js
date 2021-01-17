import React, { useState, useEffect } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {

  const [pokeData, setPokeData] = useState([])
  const [isClicked, setIsClicked ] = useState(true)
  const [search, setSearch ] = useState("")


  useEffect(() => {
    fetch('http://localhost:3001/pokemon')
    .then(r => r.json())
    .then(newPokeData => setPokeData(newPokeData))
    }, [])

    const filteredPoke = pokeData
    .filter(poke => poke.name.includes(search))

  function handleSearchChange(newSearch) {
    setSearch(newSearch)
    console.log(search)
  }

  function addPokemon(pokeObj) {
    setPokeData([...pokeData, pokeObj])
   }


  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm addPokemon={addPokemon}/>
      <br />
      <Search search={search} setSearch={setSearch} onSearchChange={handleSearchChange} />
      <br />
      <PokemonCollection 
      search={search} 
      pokeData={pokeData} 
      setPokeData={setPokeData}
      filteredPoke={filteredPoke}
      isClicked={isClicked}
      setIsClicked={setIsClicked}
      />
    </Container>
  );
}

export default PokemonPage;
