<template>
  <h1>Who's that pokémon?</h1>  

  <PokemonImage :pokemonId="7" :showPokemon="true" /> <!-- : == v-bind -->
  <PokemonOptions />

</template>

<script>
import PokemonImage from '@/components/PokemonImage'
import PokemonOptions from '@/components/PokemonOptions'

export default {
  components: {
    PokemonImage,
    PokemonOptions
  }
}
</script>
