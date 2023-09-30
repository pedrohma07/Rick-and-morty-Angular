import { Component } from '@angular/core';
import { Card } from 'src/app/interface/Card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  cards: Card[] = [
    {
      name:"Rick Sanchez",
      status:"Alive",
      specie:"Human",
      gender:"Male",
      image:"https://rickandmortyapi.com/api/character/avatar/1.jpeg"
    }
  ];

}
