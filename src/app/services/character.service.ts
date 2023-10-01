/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from "@angular/core";
import { Character } from "../interface/Character";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class CharacterService {
  private apiUrl = "https://rickandmortyapi.com/api/character";

  getCharacter(page: number): Observable<Character[]>{
    const url = `${this.apiUrl}?page=${page}`;

    return this.http.get<any>(url)
      .pipe(
        map(response => response.results.map((characterData: any) => {
          return {
            name: characterData.name,
            specie: characterData.species,
            status: characterData.status,
            gender: characterData.gender,
            image: characterData.image,
            location: {
              name: characterData.location.name
            },
            origin: {
              name: characterData.origin.name
            }
          } as Character;
        }))
      );
  }

  getPage(): Observable<any>{
    return this.http.get<any>(this.apiUrl);
  }

  constructor(private http: HttpClient) { }
}
