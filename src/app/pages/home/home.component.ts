import {Component} from '@angular/core';
import { CustomHttpService } from "../shared/shared.service";
import { StorageService } from "../shared/common.service";
import { Router } from "@angular/router";

@Component({
  selector:'home',
  templateUrl:'./home.component.html',
  styleUrls:['./home.component.css'],
  providers:[CustomHttpService,StorageService]
})
export class HomeComponent{
  userDetails:any;
  activeComponent:string;
  constructor(public storage:StorageService,private router: Router){
    this.userDetails = this.storage.getData('userDetails');
    this.activeComponent = 'csa';
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  activateComponent(activeComponent){
    this.activeComponent = activeComponent;
  }
}