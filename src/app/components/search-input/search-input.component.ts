import { Component } from "@angular/core";
import { SharedService } from "src/app/services/shared.service";
import { Router } from "@angular/router";
import { CharacterService } from "src/app/services/character.service";

@Component({
  selector: "app-search-input",
  templateUrl: "./search-input.component.html",
  styleUrls: ["./search-input.component.scss"]
})
export class SearchInputComponent {
  characterName!: string;

  constructor(
    private router: Router,
    private sharedService: SharedService, // Injete o SharedService
    private characterService: CharacterService
  ) {}

  getCharacter(){
    this.sharedService.setCurrentPage(this.characterName);
    this.characterService.setCurrentPropriety("name");
    this.router.navigate(["/", this.characterName]);

  }
  
}
