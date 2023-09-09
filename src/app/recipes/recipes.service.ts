import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";


//we make this class to be able to use an other service
@Injectable()
export class RecipesService{

    private recipes: Recipe[] = [
        new Recipe(
            ' Stick with Fries', 
            'This is a description place holder for a recipe',
            'https://thebrilliantkitchen.com/wp-content/uploads/2023/02/Crockpot-Keto-Meatloaf-1.jpeg.webp',
            [
                new Ingredient('Meat',1),
                new Ingredient('Tomato',2),
                new Ingredient('Fries',6),
                new Ingredient('Onion',1),
            ] as Ingredient[]),
        new Recipe(
            'Cheese Cake', 
            'This is a description place holder for a recipe',
            'https://p1.pxfuel.com/preview/982/923/738/pudding-caramel-pudding-food-recipe-dessert-flan.jpg',
            [
                new Ingredient('Four',3),
                new Ingredient('Sugar',2),
                new Ingredient('Milk',1),
                new Ingredient('Eggs',1),
            ] as Ingredient[]
            )
    ];
    selectedRecipe = new EventEmitter<Recipe>();

    constructor(private slService: ShoppingListService){

    }
    getRecipeList(){
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]){
        //here is where we will need to inject the shopping list service
        //we need to access the shopping list and add this array of ingredient to it

        this.slService.addIngredients(ingredients);
    }
}