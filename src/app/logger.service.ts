import { Injectable, inject } from '@angular/core';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  private userService: UserService;

  constructor() {
    this.userService = inject(UserService); // Dynamically inject UserService
  }

  log(message: string) {
    console.log(`[Logger] ${message}`);
  }

  logWithUserService(message: string) {
    console.log(`[Logger] ${message}`);
    this.userService.logMessage(`Logging from LoggerService: ${message}`);
  }
}
