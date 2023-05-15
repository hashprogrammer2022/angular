import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit{
  allowNewServer = false;
  serverCreationStatus = "No server was created up to this point.";
  inputValue = "";

  constructor(){
    //when this element will be created, add a timer to change something 2 sec later
    setTimeout(()=>{
      this.allowNewServer = true;
    }, 2000); 
  }
  ngOnInit(){
    //this.allowNewServer = false;
  }

  onServerAdd(){
    this.serverCreationStatus = `New server named ${this.inputValue} was created.`;
  }

  OnServerUpdateChange(event:any){
    this.inputValue = event.target.value;
  }
}
