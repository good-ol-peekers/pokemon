import { appState } from "../AppState.js"
import { Pokemon } from "../Models/Pokemon.js"
import { pokemonAPI } from "./AxiosService.js"



class PokemonService {

    async getPokemon() {
    const res = await pokemonAPI.get('pokemon?limit=100000&offset=0')
    const pokemon = res.data.results.map(p => new Pokemon(p))
    appState.pokemons = pokemon

    console.log('[get pokemon]', pokemon)
}
}



export const pokemonService = new PokemonService()