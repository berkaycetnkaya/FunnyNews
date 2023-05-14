import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard  {

  constructor(private authService:AuthService, private toastrService:ToastrService, private router:Router ) {


  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


this.authService.initialize();
      if(this.authService.isAuthenticatedAuth()){
        return true;
      }
      else{
        this.router.navigate(["login"])
        this.toastrService.info("Sisteme giriş yapmalısınız")
        return false ;
      }
  }

}
