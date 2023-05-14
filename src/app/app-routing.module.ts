import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from 'src/components/homepage/homepage.component';
import { LoginGuard } from 'src/guards/login.guard';

const routes: Routes = [
  {path:" ",pathMatch:"full" ,component:HomepageComponent},
  {path:" " ,component:HomepageComponent},
  {path:"home",component:HomepageComponent,canActivate:[LoginGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
