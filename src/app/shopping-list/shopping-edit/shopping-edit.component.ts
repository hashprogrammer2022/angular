import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  @Input() arrIngredients:Ingredient[];
  @ViewChild('nameInput') nameInput:ElementRef;
  @ViewChild('amountInput') amountInput:ElementRef;

  onAddIngredient(){
    if(this.arrIngredients){
      this.arrIngredients.push(new Ingredient(
        this.nameInput.nativeElement.value, 
        this.amountInput.nativeElement.value
      ));
    }
    return false;
  }
}
