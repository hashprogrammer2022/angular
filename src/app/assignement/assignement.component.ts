import { Component } from '@angular/core';

@Component({
  selector: 'app-assignement',
  templateUrl: './assignement.component.html',
  styleUrls: ['./assignement.component.css']
})
export class AssignementComponent {
  username = "";
  disableButton = false;
  usernames:string[] = [];
  constructor(){
   
    
  }
  onUpdatedUsername(){
    this.usernames.push(this.username);
    this.username = "";
  }
  onInputChange(){
    if(this.username.trim().length > 0)
    this.disableButton = true;
    else
    this.disableButton = false;
    return !this.disableButton;
  }
}
