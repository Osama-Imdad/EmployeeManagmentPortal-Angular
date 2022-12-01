import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  accountToggle:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }
  myAccount() {
this.accountToggle=!this.accountToggle;
console.log ('account is called')
  }

}
