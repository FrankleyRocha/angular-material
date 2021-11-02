import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isAuthenticated = new BehaviorSubject<boolean>(false);

  constructor(private router: Router) {
  }

  async checkAuthenticated(): Promise<boolean> {

    return this.isAuthenticated.getValue();

  }

  async login(username: string, password: string): Promise<void> {
  
    this.isAuthenticated.next(true); 

  }

  async logout(redirect: string): Promise<void> {
    
    this.isAuthenticated.next(false);
    this.router.navigate(['login']);

  }
}