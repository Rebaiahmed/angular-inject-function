import { Component } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { BackendService } from '../backend.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent extends BaseComponent {

  /* constructor( public userService: UserService){
      super(userService)
  } */ 

  constructor(){
      super()
  } 

}
