import { Component, OnInit } from '@angular/core';
import { SocialAuthService, SocialUser } from 'angularx-social-login';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: SocialUser;
  loggedIn: boolean;
  
  public admin: {} = {};
  usuario: string;
  
  
  constructor( private authService: SocialAuthService,
               private _data: UsersService,
                private route: Router ) { }

  ngOnInit(): void {

    this.admin = this._data.getService();
    this.usuario = this.admin['usuario'];

    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
    
  }

  signOut(): void {
    
      this.authService.signOut();
      this.route.navigate(['']);
  }

}
