import { RecipesService } from '../recipes.service';
import { Recipe } from './../recipe.model';
import { Component,  OnInit} from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  public recipes: Recipe[];

  recipeCount = 0;
  theRecipe:Recipe;

  constructor(private recipesService:RecipesService){
    
  }
  ngOnInit(): void {
    this.recipes = this.recipesService.getRecipeList();
  }
}
