import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authState: any = null;

  constructor(private httpService:HttpClient, private afu:AngularFireAuth, private router : Router) { 
    this.afu.authState.subscribe((auth =>{
      this.authState = auth;
    }))
  }
  // all firebase get data functions
  get isUserAnonymousLoggedIn(): boolean{
    return (this.authState !== null)? this.authState.isAnonymous : false
  }
 
  get currentUserId(): string{
   return (this.authState !== null)? this.authState.uid : ''
 }
 get currentUserName():  string{
   return this.authState['email']
 }
 get currentUser():any{
   return (this.authState !== null)? this.authState : null;
 }
 get isUserEmailLoggedIn():boolean {
   if ((this.authState !== null) && (!this.isUserAnonymousLoggedIn)){
     return true
   } else {
     return false
   }
   }
 
  async registerWithEmail(email:string, password:string)
  {
    this.afu.createUserWithEmailAndPassword(email,password).then(user=>
      {
        this.authState= user
      }).catch(error=>
        {
          console.log(error)
          throw error
        });
  }


  loginWithEmail(email:string, password:string)
 {
  return this.afu.signInWithEmailAndPassword(email,password)
  .then(user=>
    {
      debugger
      this.authState= user
    }).catch(error=>
      {
        console.log(error)
        throw error
      });
 }
 signout():void{
   this.afu.signOut();
   this.router.navigate(['/login'])
 }

  getData(){
    return this.httpService.get("assets/API/rida.json");
  }
}
