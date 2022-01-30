import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokeListService {
 private baseUrl: string;
  constructor(private http: HttpClient) {
    this.baseUrl = 'https://pokeapi.co/api/v2'
   }

  getPokemons(){
    return this.http.get(`${this.baseUrl}/pokemon`);
    }

    getPokemonsbyId(id:string){
      return this.http.get(`${this.baseUrl}/pokemon/${id}`);
      }
  }