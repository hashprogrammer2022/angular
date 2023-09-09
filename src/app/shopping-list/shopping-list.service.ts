import { Ingredient } from "../shared/ingredient.model";
import {EventEmitter} from "@angular/core";

export class ShoppingListService{
    private ingredients:Array<Ingredient> = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomato', 10),
    ];
    ingredientsUpdated = new EventEmitter<Ingredient[]>()

    getIngredients(){
        return this.ingredients.slice();
    }

    addIngredient(ingredient:Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientsUpdated.emit(this.ingredients.slice());
    }
    addIngredients(ingredients: Ingredient[]){
        //to avoide duplication
        //this.ingredients.push(...ingredients);
        this.cleanDuplication(ingredients);
        //we need to inform all parties that uses the ingredients service
        //that the ingredients were update
        this.ingredientsUpdated.emit(this.ingredients.slice());
    }

    private cleanDuplication(ingredients:Ingredient[]){
        
        //we put the existing names in a set container.
        const existingNames = new Set(this.ingredients.map(ingr => ingr.name));

        //we loop in all the new array of ingredients and check their existance.
        ingredients.forEach(ingr =>{

            //we check the existance in the original array
            if(existingNames.has(ingr.name)){
                //in this case we check the value of amount in the are diffrent to update the existing one
                //first we find the index of the existing one
               const index =  this.ingredients.findIndex(ingrElm => ingrElm.name === ingr.name);

               //now we can check if the amount value of the ingredient is different
               if(this.ingredients[index].amount !== ingr.amount){
                    this.ingredients[index].amount = ingr.amount;
               }
            }else{
                this.ingredients.push(ingr);
            }

        });
    }
    
}