import { defineStore } from 'pinia';

export const pokemonData = defineStore('pokemon_data', {
    state: () => ({
        pokemon_list: [],
        top3pokemon: []
    }),
    getters: {
        getPokemonList: (state) => state.pokemon_list,
        getTop3Pokemon: (state) => state.top3pokemon
    },
    actions: {
        addPokemonList(payload) {
            this.pokemon_list.push(payload)
            if ( this.top3pokemon.length < 3 ) {
                this.top3pokemon.push(payload)
            }
        }
    },
});
  