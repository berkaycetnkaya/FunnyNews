import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getAuth, signOut } from "firebase/auth";
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/services/auth/auth.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  currentUser:any;
  userRes:any;
  constructor(private authService:AuthService,private toastrService:ToastrService,private router:Router) { }

  ngOnInit() {
     //let auth = getAuth();
    // this.currentUser=auth;
    // console.log(this.currentUser)
    // console.log(auth)

    this.getCurrentUser()

  }
  signOut(){
    let auth= getAuth();
    this.authService.signOut(auth).then(response=>{
      this.toastrService.success("Çıkış Yaptınız")

      localStorage.removeItem("token");
    this.toastrService.error("Çıkış yaptınız.")

    this.router.navigateByUrl('login')
    },error=>{
      this.toastrService.error("hata var")
    })

    }

    isSignIn(){
      if (localStorage.getItem("token")){
        return true;
      }
      else{
        return false ;
      }
    }

    issignInAtFirebase (){
      let a = getAuth()

      if (a.currentUser!=null){
return true;
      }
      else{
        return false;
      }
    }

    getCurrentUser(){
      let a = getAuth()
    this.authService.setCurrentUser(a)
  this.currentUser=a.currentUser

  }



}
