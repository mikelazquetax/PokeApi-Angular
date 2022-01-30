import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';
import { PokeListService } from './poke-list.service';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {
public pokemonList: Pokemon[];
public secPokemonList: Pokemon[];
public singlePokemon: {
  id: number,
  name: string,
   type: string[] ,
   imagen: string
  
}
public pokeFiltro: string
public id: string;
  constructor(private pokeListService: PokeListService) { }

  ngOnInit(): void {
    this.pokemonList = []
    this.secPokemonList = []
   
    for(let i = 1; i < 151; i++){
     
      this.id = i.toString()
    this.getPokeList(this.id)
  
    
    }
  }

  private getPokeList(id: string):void{
   
    this.pokeListService.getPokemonsbyId(id).subscribe((res:any)=>{
  
      console.log(res)
       var pokemon = {
        id : res.id,
        name: res.name.toUpperCase(),
       type: res.types ,
       imagen: res.sprites.front_shiny
      }

    
      let allTypes = [...pokemon.type]
      pokemon.type = []
      allTypes.forEach((item)=>{
       pokemon.type.push(item.type.name) 
       
      })

     

    this.pokemonList.push(pokemon) 

    this.secPokemonList.push(pokemon)
    
    
    }, (error) =>{
      console.log(error)
    })
  }
  onKeyUp(x:any){


this.pokemonList = this.secPokemonList
   let valorCampo = x.target.value.toUpperCase()
    const pokeFiltrado = this.pokemonList.filter((item)=>{
    return  item.name.includes(valorCampo)
    })
    console.log(pokeFiltrado)
    this.pokemonList = pokeFiltrado

 }
}

