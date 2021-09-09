import pokemonApi from '@/api/pokemonApi'

describe('pokemonApi', () => {
  test('Should...', () => {

    expect( pokemonApi.defaults.baseURL ).toBe('https://pokeapi.co/api/v2/pokemon')  
  })
})