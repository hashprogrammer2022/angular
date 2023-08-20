import { Component, OnInit } from '@angular/core';
import { AccountService } from './account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //provide the service we need for the accounts
  providers:[]
})


export class AppComponent implements OnInit {
  accounts:Array<{name:string, status:string}>
  //we gonna ask the construct to use the service provided
  constructor(private accountService:AccountService){

  }

  ngOnInit(): void {
    this.accounts = this.accountService.accounts;
  }
}
