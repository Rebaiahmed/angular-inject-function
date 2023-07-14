import { Injectable, inject } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private loggerService: LoggerService;

  constructor() {
    this.loggerService = inject(LoggerService); // Dynamically inject LoggerService
  }

  logMessage(message: string) {
    this.loggerService.log(message);
}

}
