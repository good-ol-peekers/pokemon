export const pokemonAPI = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/',
    timeout: 3500

})

export const sandboxAPI = axios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com/api/Thomas_Peek/pokemon',
    timeout: 3500
})