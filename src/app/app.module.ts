import { LoginComponent } from './../components/login/login.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from '../components/homepage/homepage.component';
import { NavbarComponent } from 'src/components/navbar/navbar.component';
import { environment } from 'src/environments/environment';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavbarComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireAuthModule ,
    ReactiveFormsModule ,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    ToastrModule.forRoot({
      positionClass:"toast-top-right"
    }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
