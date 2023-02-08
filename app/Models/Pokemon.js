export class Pokemon {
    constructor(data) {
        this.name = data.name

    }



    get PokemonTemplate() {
        return   `
        <div class="col-8  border mt-5 border-outline" >
          <div>
            <img src="" alt="">
            <h1>${this.name}</h1>
            <h3>pokemon stats</h3>
            <h3>pokemon stats</h3>
            <h3>pokemon stats</h3>
            <button class="btn btn-outline-success" onclick="">catch</button>
          </div>
        </div>
        `
    }
    static StaticTemplate(){
        return 
    }
}