import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit{
  @Input() recipeItem:Recipe;
  @Output() exportRecipeOnInit = new EventEmitter<void>();
  @Output() exportRecipeOnClick = new EventEmitter<void>();

  ngOnInit(): void {
    //this.exportRecipeOnInit.emit();
  }
  onRecipeClicked(){
    this.exportRecipeOnClick.emit();
  }
}
