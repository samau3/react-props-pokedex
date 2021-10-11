const BASE_URL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon";

/** Shows a single Pokemon, with their name, image, base_experience and type */
function Pokecard({name, id, type, base_experience}) {
    const imageURL = `${BASE_URL}/${id}.png`;

    return (
    <div>
        <img src={imageURL} alt={name}/> 
        <p>{name} {type} {base_experience} </p>
    </div>
    );
}

export default Pokecard;