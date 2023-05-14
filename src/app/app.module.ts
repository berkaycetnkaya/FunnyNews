import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from '../components/homepage/homepage.component';
import { NavbarComponent } from 'src/components/navbar/navbar.component';
import { environment } from 'src/environments/environment';
import { ToastrModule } from 'ngx-toastr';
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    ToastrModule.forRoot({
      positionClass:"toast-top-right"
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
