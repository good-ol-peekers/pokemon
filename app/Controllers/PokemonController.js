import { appState } from "../AppState.js";
import { Pokemon } from "../Models/Pokemon.js";
import { pokemonService } from "../Services/PokemonService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";

function _drawPokemons(){
    let template = ''
    appState.pokemons.forEach(p => template += p.PokemonTemplate)
setHTML('drawPokemons', template)
}


export class PokemonController {

constructor(){
    appState.on('pokemons', _drawPokemons)

}
async getPokemon() {
    try {
        await pokemonService.getPokemon()
    } catch (error) {
        Pop.error(error)
    }
}

async addPokemonToAPI(){
    try {
        await pokemonService.addPokemonToAPI()
    } catch (error) {
        Pop.error(error)
    }
}
}