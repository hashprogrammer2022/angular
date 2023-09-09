import { Component, ElementRef, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {

  @ViewChild('nameInput') nameInput:ElementRef;
  @ViewChild('amountInput') amountInput:ElementRef;

  constructor(private slService:ShoppingListService){}
  onAddIngredient(){
    this.slService.addIngredient(new Ingredient(
      this.nameInput.nativeElement.value, 
      this.amountInput.nativeElement.value
    ));
    return false;
  }
}
