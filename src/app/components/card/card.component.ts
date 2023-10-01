import { Component } from "@angular/core";
import { Character } from "src/app/interface/Character";

import { CharacterService } from "src/app/services/character.service";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"]
})
export class CardComponent {
  characters: Character[] = [];
  countPage!: number;
  page: number = 12;

  constructor(private characterService: CharacterService){
    this.getCharacters();
    this.getPage();
  }

  getCharacters(): void {
    this.characterService.getCharacter(this.page).subscribe((characters) => this.characters = characters);
  }
  getPage(): void{
    this.characterService.getPage().subscribe((pages) => this.countPage = pages.info.pages);
  }
}
