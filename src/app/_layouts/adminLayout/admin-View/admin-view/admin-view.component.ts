import { Component, Input, OnInit } from '@angular/core';

interface SideNavToggle {
  checkscreenWidth:number;
  checkcollapsed:boolean;
}


@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.scss']
})
export class AdminViewComponent implements OnInit {

  sidebarExpanded = true;
  isSideNavCollapsed=false;
  IsScreenWidth=0;
  ToggleWidth:boolean=true;

  constructor() { }


  @Input() collapsed =false;
  @Input() screenWidth=0;


  ngOnInit(): void {
  }

  getBodyClass() {
    let styleClass='';
    if (this.collapsed && this.screenWidth>768) {
      styleClass='body-trimmed'
    } else if (this.collapsed && this.screenWidth<=768 && this.screenWidth >0) {
      styleClass='body-md-screen'
    }
return styleClass;
  }


  onToggleSideNav(data:SideNavToggle) :void{
    this.IsScreenWidth=data.checkscreenWidth;
    this.isSideNavCollapsed=data.checkcollapsed;


    if (this.collapsed==false) {
      this.ToggleWidth= !this.ToggleWidth;
      console.log('width lago')
    }


  }

}
