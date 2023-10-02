import { Component, OnInit } from "@angular/core";
import { CharacterService } from "src/app/services/character.service";
import { Router } from "@angular/router";
import { SharedService } from "../../services/shared.service"; // Importe o SharedService

@Component({
  selector: "app-paginator",
  templateUrl: "./paginator.component.html",
  styleUrls: ["./paginator.component.scss"],
})
export class PaginatorComponent implements OnInit {
  currentPage: number = 1;
  countPage!: number;

  constructor(
    private characterService: CharacterService,
    private router: Router,
    private sharedService: SharedService // Injete o SharedService
  ) {}

  ngOnInit() {
    this.getPage();
  }

  nextPage() {
    if (this.currentPage < this.countPage) {
      this.currentPage++;
      this.characterService.setCurrentPropriety("page");
      this.sharedService.setCurrentPage(this.currentPage); // Atualize o currentPage no SharedService
      this.router.navigate(["/", this.currentPage]);
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.characterService.setCurrentPropriety("page");
      this.sharedService.setCurrentPage(this.currentPage); // Atualize o currentPage no SharedService
      this.router.navigate(["/", this.currentPage]);
    }
  }

  getPage(): void {
    this.characterService.getPage().subscribe((pages) => (this.countPage = pages.info.pages));
  }
}