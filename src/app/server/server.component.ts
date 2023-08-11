 import {Component} from '@angular/core';
 @Component({
    selector:'app-server',
    templateUrl:'./server.component.html',
    styleUrls:['./server.component.css']
 })
 export class ServerComponent{
   serverID = 10;
   serverStatus = 'offline';

   //we need a random server status that changes to online or offline
   constructor(){
    this.serverStatus = Math.random() > .5 ? 'online' : 'offline';
   }
   //we need to generate a color to represent the online vs offline status
   getColor(){
    return this.serverStatus === 'online' ? 'green' : 'red';
   }
 }