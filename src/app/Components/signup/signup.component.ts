import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  fullname ='';
  email ="";
  password ="";
  message = '';
  errorMessage = ""; //validation Error Handle
  error : { name: string, message: string} = { name:'', message:''}; // for firebase error handle
  public signupForm !: FormGroup;
  constructor(private  FormBuilder: FormBuilder, private http : HttpClient, private router:Router, private api : ApiService,private authservice:AuthService) { }
 
  ngOnInit(): void {
    this.signupForm = this.FormBuilder.group({
      fullname:['', Validators.required],
      email:['', Validators.required],
      password:['', Validators.required],
      mobile:['', Validators.required]
    })
  }
clearErrorMessage(){
  this.errorMessage = '';
  this.error = {name:'', message:''};
}
 register()
 {
   this.clearErrorMessage();
   if(this.validateForm(this.email, this.password))
   {
     this.authservice.registerWithEmail(this.email, this.password)
     .then(()=>
     {
       this.message = "Successfully Registered!!!",
       this.router.navigate(['home']);
     }).catch((_error:any)=>{
        this.error= _error
        this.router.navigate(['signup'])
     })
   }
 }
 validateForm(email:string,password:string)
 {
   if(email.length === 0)
   {
     this.errorMessage = "Please Enter email id";
     return false;
   }
   if(password.length === 0)
   {
     this.errorMessage = "Please Enter Password";
     return false;
   }
   if(password.length < 6)
   {
     this.errorMessage = "Password Should be atleast 6 character";
     return false;
   }

   this.errorMessage = '';
   return true;
 }
  //signUp(){
   //this.http.post<any>("http://localhost:3000/signupUsers", this.signupForm.value)
   //.subscribe(res=>{
   //  alert("Signup Successfull");
    // this.signupForm.reset();
    // this.router.navigate(['home']);
  // },err=>{
   //  alert("Something went Wrong")
  // })
  //}

}
