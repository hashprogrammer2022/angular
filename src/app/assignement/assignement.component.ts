import { Component } from '@angular/core';

@Component({
  selector: 'app-assignement',
  templateUrl: './assignement.component.html',
  styleUrls: ['./assignement.component.css']
})
export class AssignementComponent {
  username = "";
  outUsername="";
  
  onUpdatedUsername(){
    
    this.outUsername += this.outUsername !== "" ? ", " + this.username : this.username ;
    this.username = "";
  }
}
