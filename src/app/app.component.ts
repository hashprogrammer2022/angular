import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'course-project01';
  page:string;

  constructor(){
    this.page = 'recipes';
  }
  ngOnInit(): void {
    
  }
  onHandlePage(ev:string){
    this.page = ev;
  }
}
