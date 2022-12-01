import { Component, OnInit, Output ,EventEmitter, HostListener} from '@angular/core';
import { Router } from '@angular/router';
import { navBarData } from './SidebarData';


interface SideNavToggle {
  checkscreenWidth:number;
  checkcollapsed:boolean;
}



@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Output() onToggleSideNav:EventEmitter<SideNavToggle>=new EventEmitter();
  collapsed = false;
  screenWidth=0;
  navData=navBarData;

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.screenWidth=window.innerWidth;
  }





  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
   this. screenWidth = window. innerWidth;
   if(this.screenWidth <= 768 ) {
   this.collapsed = false;
   this.onToggleSideNav.emit({checkcollapsed:this.collapsed,checkscreenWidth:this.screenWidth})
  }
}





signOut() {
  let text = "Are you sure to Logout!.";
  if (confirm(text) == true) {
    text = "You pressed OK!";
    localStorage.removeItem('accessToken');
    this.router.navigate(['/login'])

  } else {
    text = "You canceled!";
  }


}





  toggleCollapse(){
    this.collapsed=!this.collapsed;
    this.onToggleSideNav.emit({checkcollapsed:this.collapsed,checkscreenWidth:this.screenWidth})
  }
  closeSidenav():void {
    this.collapsed=false;
    this.onToggleSideNav.emit({checkcollapsed:this.collapsed,checkscreenWidth:this.screenWidth})
  }



}
