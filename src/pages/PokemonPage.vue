<template>
  <h1 v-if="!pokemon">
    Wait please!
  </h1>
  
  <div v-else>
    <h1>Who's that pokémon?</h1>  

    <PokemonImage :pokemonId="pokemon.id" :showPokemon="showPokemon" /> <!-- : == v-bind -->
    <PokemonOptions :pokemons="pokemonArr" />
  </div>
</template>

<script>
import PokemonImage from '@/components/PokemonImage'
import PokemonOptions from '@/components/PokemonOptions'

import getPokemonOptions from '@/helpers/getPokemonOptions'

export default {
  components: {
    PokemonImage,
    PokemonOptions
  },
  data() {
    return {
      pokemonArr: [],
      pokemon: null,
      showPokemon: false
    }
  },
  methods: {
    async mixPokemonArray() {
      this.pokemonArr = await getPokemonOptions()

      const randomInt = Math.floor( Math.random() * 4 )
      this.pokemon = this.pokemonArr[ randomInt ]
    }
  },
  mounted() {
    this.mixPokemonArray()
  }
}
</script>
