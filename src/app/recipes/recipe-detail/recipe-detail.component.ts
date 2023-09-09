import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit{
  @Input() recipeItem:Recipe;
  
  constructor(private recipesService: RecipesService){
    
  }
  ngOnInit(): void {
    
  }
  onAddToShoppingList(){
    //here we need to take the ingredient that are found in the opened recipe 
    //and put the to the list of the shopping list ingredient
    //just like we have a recipe and we wont to buy it's ingredient to make it
    //we will import the recipe service because we need the operation methods
    this.recipesService.addIngredientsToShoppingList(this.recipeItem.ingredients);
  }
}
