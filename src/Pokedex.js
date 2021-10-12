import Pokecard from "./Pokecard";

/** Is provided, via props, an array of objects describing different pokemon, 
 * and renders a sequence of Pokecard components. */
function Pokedex ({pokemonList}) {
    console.log("in pokedex pokemonList is ", pokemonList);
    // pokemonList is a regular array of JS objects
    // .map is returning us an array
    // p represents one pokemon data, and Pokecard is returning a list of DOM elements
    // call React components via <>, don't call them as functions
    const pokemonCards = pokemonList.map(p => <Pokecard {...p} />);

    return pokemonCards;    
}

export default Pokedex;