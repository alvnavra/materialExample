import { Component, OnInit, NgZone, ViewChild } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Observable } from 'rxjs';
import { User } from '../../models/user';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material';

const SMALL_WIDTH_BREAKPOINT = 720;

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  private mediaMatcher: MediaQueryList = matchMedia(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`)
  users:Observable<User[]>;
  isDarkTheme:boolean = false;
  dir : string = 'ltr'

  constructor(zone:NgZone, 
              private userService:UsersService,
              private router:Router) {
      this.mediaMatcher.addListener(mql => zone.run(()=>this.mediaMatcher=mql))
   }

  @ViewChild(MatSidenav) sidenav:MatSidenav
  toogleTheme(){
    this.isDarkTheme = !this.isDarkTheme;
  }
  toogleDir()
  {
     this.dir = this.dir == 'ltr'?'rtl':'ltr';
     this.sidenav.toggle().then(()=>{this.sidenav.toggle()});
  }
  ngOnInit() {
    this.users = this.userService.users;
    this.userService.loadAll();
      this.router.events.subscribe(()=>{
        if(this.isSmallScreen())
        {
          this.sidenav.close();
        }
      })
  }

  isSmallScreen():boolean
  {
    return this.mediaMatcher.matches;
  }

}
