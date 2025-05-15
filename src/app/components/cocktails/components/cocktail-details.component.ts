import { Component } from '@angular/core';
import {Cocktail} from '../../../shared/interfaces';



// @ts-ignore
// @ts-ignore
@Component({
  selector: 'app-cocktail-details',
  imports: [],
  template: ` <img class="mb-20" [src]="cocktail.image" />
  <h3 class="mb-20">{{ cocktail.name }}</h3>
  <p class="mb-20">{{ cocktail.description}}</p>
  <div>
    <button class=" btn btn-primary">Ajouter</button>
  </div>

  `,
  styles: `
   :host {
     display : flex;
     flex-direction: column;

   }

  `
})
export class CocktailDetailsComponent {
  cocktail : Cocktail = {
    image: '/images/mojito.jpg',
    name: 'Mojito',
    description: 'Le Mojito est un cocktail cubain rafraîchissant à base de rhum blanc, menthe fraîche, sucre, jus de citron vert et eau gazeuse. Léger et parfumé, il est idéal pour l\'été grâce à son équilibre entre acidité, douceur et fraîcheur.'
  }

}
