import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements:Array<{type:string, name:string, content:string}> = [];
 
  addServer(data:{name:string, content:string}){
    this.serverElements.push({
      type: 'server',
      name: data.name,
      content: data.content
    });
  }
  addBlueprint(data:{name:string, content:string}){
    this.serverElements.push({
      type: 'blueprint',
      name: data.name,
      content: data.content
    });
  }
}
