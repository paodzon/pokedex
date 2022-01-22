export const listPokemon = async() =>{
    return (await fetch('https://pokeapi.co/api/v2/pokemon/?limit=150&offset=0')).json();
}

export const getPokemon = async(name) =>{
    return (await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)).json();
}