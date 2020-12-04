import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { SocialAuthService, SocialUser } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public isCollapsed1 = true;
  public isCollapsed2 = true;
  private admins: {} = {};
  error: boolean = false;

  user: SocialUser;
  loggedIn: boolean;

  usuario = {
    usuario: '',
    password: ''
  };

  constructor( private route: Router,
               private _datos: UsersService,
               private authService: SocialAuthService ) { }

  ngOnInit(): void {

    this.admins =  this._datos.getService();
    
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
  

  }
  //Metodos redes sociales
  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    this.route.navigate(['user']);
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
    this.route.navigate(['user']);
  }

  signOut(): void {
    this.authService.signOut();
  }

  //metodo verificacion de usuario
  adminVerify( forma: NgForm){
    console.log(forma.value);

    if( forma.value.usuario == this.admins['usuario'] && forma.value.password == this.admins['password']){
        
        this.error = false;
        this.route.navigate(['user']);
    }
    else{
      this.error = true;
    }
  }

}
