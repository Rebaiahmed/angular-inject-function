import { Component, inject } from '@angular/core';
import { BackendService } from '../backend.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { LoggerService } from '../logger.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent {

 /*    constructor(userService: UserService,http: HttpClient) {
  } */ 

  private userService: UserService=inject(UserService);

}
