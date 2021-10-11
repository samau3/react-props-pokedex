import Pokecard from "./Pokecard";

/** Is provided, via props, an array of objects describing different pokemon, and renders a sequence of Pokecard components. */
function Pokedex ({pokemon}) {
    const something = pokemon.map(p => <span>{Pokecard(p)}</span>);

    return (
        <span>{something}</span>
    );
}

export default Pokedex;