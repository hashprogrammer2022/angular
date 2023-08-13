import { Recipe } from './../recipe.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  public recipes: Recipe[] = [
    new Recipe(' A test recipe', 'This is a description place holder for a recipe','https://thebrilliantkitchen.com/wp-content/uploads/2023/02/Crockpot-Keto-Meatloaf-1.jpeg.webp'),
    new Recipe(' An other test recipe', 'This is a description place holder for a recipe','https://p1.pxfuel.com/preview/982/923/738/pudding-caramel-pudding-food-recipe-dessert-flan.jpg')
  ];

  constructor(){

  }
}
