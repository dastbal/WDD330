const URL= 'https://pokeapi.co/api/v2/pokemon/';


export default class Pokemon {
    constructor(root){
        this.element = root
    }
    

     
     
    async getPokemonList(){
         
         
         let url = "https://pokeapi.co/api/v2/pokemon/?limit=10&offset=0"
         let req = await fetch(url)
         let data =  await req.json() 
         
         return data
        }
    async getOnePokemon(id){
         
         
         let url = `${URL}id/`
         console.log(url)
         let req = await fetch(url)
         let data =  await req.json() 
         console.log(data)  
         
         return data
        }

        showPokemonList(){
            
        }

    
        
        
       
    }

    function renderPokemon(data,element){
        console.log( data ,element)
        // data.forEach(el => {  
        //     list +=`
        //     <h2> ${el.name}</h2>
        //     <img src="${el.url}" alt="${el.name}" />
        //     `

            
        // });
        
        
    }

    

