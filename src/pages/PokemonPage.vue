<template>
  <h1 v-if="!pokemon">
    Wait please!
  </h1>
  
  <div v-else>
    <h1>Who's that pokémon?</h1>  

    <PokemonImage
      :pokemonId="pokemon.id"
      :showPokemon="showPokemon" /> <!-- : == v-bind -->
    <PokemonOptions
      :pokemons="pokemonArr"
      @selection="checkAnswer" />  
  </div>

  <template v-if="showAnswer">
    <h2 class="fade-in answer">{{ message }}</h2>
    <button @click="newGame">
      New game
    </button>
  </template>
  
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
      showPokemon: false,
      showAnswer: false,
      message: ''
    }
  },
  methods: {
    async mixPokemonArray() {
      this.pokemonArr = await getPokemonOptions()

      const randomInt = Math.floor( Math.random() * 4 )
      this.pokemon = this.pokemonArr[ randomInt ]
    },
    checkAnswer( selectedId ) {
      this.showPokemon = true
      this.showAnswer = true

      if ( selectedId === this.pokemon.id ) {
        this.message = `Great answer, it's ${this.pokemon.name}`
      } else {
        this.message = `Oops, wrong answer. It is ${this.pokemon.name}`
      }
    },
    newGame() {
      this.showPokemon = false
      this.showAnswer = false
      this.pokemonArr = []
      this.pokemon = null
      this.mixPokemonArray()
    }
  },
  mounted() {
    this.mixPokemonArray()
  }
}
</script>

<style scoped>
.answer {
  margin-bottom: 40px;
}

button {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: white;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  cursor: pointer;
  margin-bottom: 10px;
  margin-left: 40px;
}
</style>
