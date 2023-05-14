import { initializeApp } from 'firebase/app';
import { Injectable } from '@angular/core';
import { getAuth, signOut } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuth } from '@angular/fire/compat/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
b:any;
  constructor(private aufs:AngularFireAuth,private afm:AngularFireModule) {

  }

  db:any = {};
initialize(){
  const app = initializeApp(environment.firebase);
  const db = getFirestore(app);
  this.db = db;
}

  setCurrentUser(user:any){
this.b=user;
  }
  isAuthenticated(){
    if(localStorage.getItem("token")){
      return true;
    }
    else{
      return false;
    }
  }
  isAuthenticatedAuth(){
    AngularFireModule.initializeApp(environment.firebase)


    const a = getAuth();
    if(a==null){
          if(this.b.currentUser!=null){
            return true;
          }
          else{
            return false;
          }
    }
    else{
      if(a.currentUser!=null){
        return true;
      }
      else{
        return false;
      }

    }

  }

  signInWithEmailAndPassword(email:string, password:string  ){
    return this.aufs.signInWithEmailAndPassword(email, password);
  }

  registerWithEmailAndPassword(email:string, password:string  ){
    return this.aufs.createUserWithEmailAndPassword(email, password);
  }
  signOut(auth:any){
    let a = getAuth();
    signOut(a)
   return signOut(a);
  }
}
