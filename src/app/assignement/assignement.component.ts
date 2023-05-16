import { Component } from '@angular/core';

@Component({
  selector: 'app-assignement',
  templateUrl: './assignement.component.html',
  styleUrls: ['./assignement.component.css']
})
export class AssignementComponent {
  username = "";
  usernames:string[] = [];
  
  onUpdatedUsername(){
    this.usernames.push(this.username);
    this.username = "";
  }
}
