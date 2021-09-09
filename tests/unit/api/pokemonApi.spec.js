import pokemonApi from '@/api/pokemonApi'

describe('pokemonApi', () => {
  test('Axios call should use the correct URL', () => {

    expect( pokemonApi.defaults.baseURL ).toBe('https://pokeapi.co/api/v2/pokemon')  
  })
})