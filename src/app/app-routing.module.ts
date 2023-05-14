import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from 'src/components/homepage/homepage.component';
import { LoginComponent } from 'src/components/login/login.component';
import { LoginGuard } from 'src/guards/login.guard';

const routes: Routes = [
  {path:" ",pathMatch:"full" ,component:HomepageComponent},
  {path:" " ,component:HomepageComponent},
  {path:"home",component:HomepageComponent,canActivate:[LoginGuard]},
  {path:"login" ,component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
