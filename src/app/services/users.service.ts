import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private admin: {} = 
    {
      usuario: '@admin',
      password: '123456'
    }
  ;

  getService(){
    return this.admin;
  }
}
