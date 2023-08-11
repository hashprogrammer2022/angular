import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  serverName="DefaultServer001";
  serverCreated = false;
  AllowNewServer = false;
  ServerCreationStatus="No server was created";
  servers = [];
  constructor(){
    setTimeout(()=>{
      this.AllowNewServer = true;
    }, 5000);
  }

  onAddServer(){
    this.servers.push(this.serverName);
    this.serverCreated = true;
    //this.servers.push('Server ' + (this.servers.length + 1));
    this.ServerCreationStatus = "New Server was created"
  }
  onUpdateServerName(e: Event){
    this.serverName = (<HTMLInputElement> e.target).value;
  }
}
