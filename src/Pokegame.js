/** */

import Pokedex from "./Pokedex";

function Pokegame({pokemonList}) {

    const handOne = [];
    const handTwo = [];

    for (let i = pokemonList.length-1; i >= 0; i--) {
        let randomIndex = Math.floor(Math.random() * i);

        if (handOne.length < 4) {
            handOne.push(pokemonList[randomIndex]);
            pokemonList.splice(randomIndex, 1);
        } else {
            handTwo.push(pokemonList[randomIndex]);
            pokemonList.splice(randomIndex, 1);
        };
    };


    const playerOneHand = <Pokedex pokemonList={handOne} />;
    const playerTwoHand = <Pokedex pokemonList={handTwo} />;

    return (
        <div>
            <div>
            {playerOneHand}
            </div>
            <div>
            {playerTwoHand}
            </div>
        </div>
    );
};

export default Pokegame;
