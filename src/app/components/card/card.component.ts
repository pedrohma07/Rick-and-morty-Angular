import { Component, OnInit } from "@angular/core";
import { Character } from "src/app/interface/Character";
import { ActivatedRoute } from "@angular/router";
import { CharacterService } from "src/app/services/character.service";
import { SharedService } from "../../services/shared.service"; // Importe o SharedService

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"],
})
export class CardComponent implements OnInit {
  characters: Character[] = [];
  currentParams = 0;

  constructor(
    private characterService: CharacterService,
    private route: ActivatedRoute,
    private sharedService: SharedService
  ) {}

  ngOnInit() {
    this.getCharactersInit();
    this.sharedService.currentParam$.subscribe((param) => {
      this.currentParams = param;
      this.getCharacters();
    });
  }

  getCharactersInit(): void {
    const id = Number(this.route.snapshot.paramMap.get("params"));
    this.characterService.getCharacter(id).subscribe((characters) => (this.characters = characters));
  }

  getCharacters(): void {
    this.characterService.getCharacter(this.currentParams).subscribe((characters) => (this.characters = characters));
  }
}