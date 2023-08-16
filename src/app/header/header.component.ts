import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
    selector:'app-header',
    templateUrl:'./header.component.html',
    styleUrls:['./header.component.css']
})
export class HeaderComponent implements OnInit{
   
    @Output() openRecipes = new EventEmitter<void>();
    @Output() openShopping = new EventEmitter<void>();
    
    ngOnInit(): void {
       //this.openRecipes.emit(); 
    }
    onOpenRecipes(){
        this.openRecipes.emit(); 
    }
    onOpenShopping(){
        this.openShopping.emit(); 
    }
}