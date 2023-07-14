import { Component, inject } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { UserService } from '../user.service';
import { LoggerService } from '../logger.service';
import { ActivatedRoute } from '@angular/router';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent {

  /* constructor( private userService: UserService,private loggerService: LoggerService,private http:HttpClient,
    private route: ActivatedRoute,private backend:BackendService){
  } */
private userService: UserService=inject(UserService);
private loggerService: LoggerService=inject(LoggerService);
private http: HttpClient=inject(HttpClient);
private route: ActivatedRoute=inject(ActivatedRoute);
private backend: BackendService=inject(BackendService);
}
