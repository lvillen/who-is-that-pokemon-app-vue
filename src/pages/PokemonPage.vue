<template>
  <h1>Who's that pokémon?</h1>  

  <PokemonImage :pokemonId="7" :showPokemon="true" /> <!-- : == v-bind -->
  <PokemonOptions :pokemons="pokemonArr" />

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
      pokemonArr: []
    }
  },
  methods: {
    async mixPokemonArray() {
      this.pokemonArr = await getPokemonOptions()
    }
  },
  mounted() {
    this.mixPokemonArray()
  }
}
</script>
