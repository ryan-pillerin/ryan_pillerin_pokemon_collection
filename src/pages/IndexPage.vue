<template>
  <q-page class="background">
    <TopPokemon :top3Pokemon="top3Pokemon"></TopPokemon>
    <PokemonList :pokemonlist="getPokemonList"></PokemonList>
  </q-page>
</template>

<script>
import TopPokemon from 'src/components/TopPokemon.vue';
import PokemonList from 'src/components/PokemonList.vue';
import PokemonAPI from './../modules/pokemon_api/pokemonapi'
import { pokemonData } from './../stores/pokemon_data.js'
import { mapState } from 'pinia';

export default {
  data: () => ({
  }),
  components: {
    TopPokemon,
    PokemonList
  },
  computed: {
    ...mapState(pokemonData, {
      getPokemonList: 'getPokemonList',
      top3Pokemon: 'getTop3Pokemon'
    })
  },
  mounted() {
    /**
     * Initialize the Pokemon API class and call the top 20 pokemons
     */
    const pokemon_api = new PokemonAPI()
    pokemon_api.getTop20Pokemons()
  }
}
</script>

<style lang="scss" scoped>
.background {
  height: 100%;
  background: linear-gradient(180deg, #140626 30%, white 0%);
}

.top-header {
  padding-top: 5%;
}
</style>
