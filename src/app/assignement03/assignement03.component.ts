import { Component } from '@angular/core';

@Component({
  selector: 'app-assignement03',
  templateUrl: './assignement03.component.html',
  styleUrls: ['./assignement03.component.css']
})
export class Assignement03Component {
  showDetails = false;
  count=0;
  logs = [];
  isHighEnough = false;

  onClickShowDetails(){
    this.showDetails = !this.showDetails;
    this.logs.push(`Log ${++this.count} at timestamps ${+new Date()}`);

    if(this.count > 5){
      this.isHighEnough = true;
    }
  }
  setBackground(item:any){
    return {backgroundColor: item >5 ? 'blue' : 'none', };
  }
  setClass(item:any){
    return {whiteColor: item > 5}
  }
}
