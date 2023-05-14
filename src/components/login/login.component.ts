import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { getAuth, signOut } from "firebase/auth";
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthService } from 'src/services/auth/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
   currentUser:any;
   userRes:any;
   resti:string;

  constructor(private formBuilder:FormBuilder,private authService:AuthService,private toastrService:ToastrService,private router:Router,private aufs:AngularFireAuth) { }

  ngOnInit() {
    this.createLoginForm();
    localStorage.clear();
     let auth = getAuth();

    // this.currentUser=auth;
    this.getCurrentUser()
  }
  createLoginForm(){
    this.loginForm=this.formBuilder.group({
      email:["",Validators.required],
      password:["",Validators.required]
    })
    }
IsFormsAreWrittin(){
  if (this.loginForm.value.email!="" && this.loginForm.value.password != ""){
    return false;
  }
  else{
    return true;
  }
}

loginWithEmailAndPassword(){

 let email=this.loginForm.value.email;
 let password=this.loginForm.value.password;
  let userData=Object.assign({},{email:this.loginForm.value.username} );
  this.authService.signInWithEmailAndPassword(email,password).then((res:any)=>{
    this.toastrService.info("Giriş Yaptınız")
    this.router.navigateByUrl('home');

   this. resti= res;
    //localStorage.setItem("token",JSON.stringify(res))

  }).catch((error:any)=>{
    this.toastrService.error("Şifre veya Mail Yanlış");
  })


// this.authService.signInWithEmailAndPassword()
}
signOut(){
this.authService.signOut(this.currentUser)
}

getCurrentUser(){
  let a = getAuth()
this.authService.setCurrentUser(a)

}
}
