import { Routes, RouterModule } from '@angular/router';


import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component';


export const ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'user', component: UserComponent },
    { path: '**', component: HomeComponent }

  
];

