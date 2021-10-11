const BASE_URL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon"

/** Shows a single Pokemon, with their name, image, base_experience and type */
function Pokecard({name, id, type, base_experience}) {
    const image = `${BASE_URL}/${id}.png`;

    return (
    <span>
        <img src ={image} alt= "Pokemon"/> 
        <p>{name} {type} {base_experience} </p>
    </span>
    );
}

export default Pokecard;