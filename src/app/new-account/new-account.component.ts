import { Component, EventEmitter, Output } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  //we need to tell angular what service is it
  providers:[]
})

export class NewAccountComponent {

  //to use a service we need a constructor to anounce it without instatiation
  constructor(private accountService:AccountService){
    this.accountService.statusUpdate.subscribe(function(status:string) {
      alert("New status: " + status)
    });
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount(accountName, accountStatus);
    //this.loggingService.logStatusChange(accountStatus);
  }
}
