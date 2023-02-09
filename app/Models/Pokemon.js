export class Pokemon {
    constructor(data) {
        this.name = data.name
        this.url = this.url

    }



    get PokemonTemplate() {
        return   `
        <div class="col-4 bg-dark text-light  border mt-5 border-outline" >
          <div>
            <img src="" alt="">
            <h1>${this.name}</h1>
            <div>
            <button onclick="app.pokemonController.addPokemonToAPI()">Catch Me!</button>
            </div>
          </div>  
        </div>
`
    }
  }    