import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from '../components/home/home.component';
import {DashboardComponent} from '../components/dashboard/dashboard.component';
import {AuthGuard} from '../guards/auth.guard';
import {ContactComponent} from '../components/contact/contact.component';
import { InfoComponent } from '../components/info/info.component';
import { WelcomeComponent } from '../components/welcome/welcome.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',component:HomeComponent,
   children:[{
     path: '', component: WelcomeComponent
   },{
    path: 'contact', component: ContactComponent},{
    path: 'info', component: InfoComponent
  }] },
  { path:'dashboard',component: DashboardComponent,canActivate:[AuthGuard]},

  {path: '**', redirectTo: ''}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RouterRoutingModule { }
