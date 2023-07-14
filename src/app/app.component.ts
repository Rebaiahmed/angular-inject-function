import { Component } from '@angular/core';
import { UserService } from './user.service';
import { LoggerService } from './logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-inject-function';

  constructor( private userService: UserService,private loggerService: LoggerService){
  
}

  
}
