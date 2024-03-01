import axios from "axios"
import { pokemonData } from './../../stores/pokemon_data.js'

export default class PokemonAPI {

    constructor() {

    }

    getTop20Pokemons() {
        axios.get(`https://pokeapi.co/api/v2/pokemon`).then( (data) => {
            if ( data.status == 200 ) {
                const result = data.data
                //pokemonData().setPokemonList(result.results)

                result.results.map( async (pokemon) => {
                    const result = await this.getSpecificPokemon(pokemon.name).then( (data) => data)                   
                    pokemonData().addPokemonList({...pokemon, ...result})
                })
            }
        })
    }

    getSpecificPokemon(pokemon_name) {
        return axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon_name}`).then( (data) => {
            return data.data
        })
    }
}