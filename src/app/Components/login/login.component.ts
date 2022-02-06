import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  fullname ='';
  email ="";
  password ="";
  message ='';
  errorMessage = ""; //validation Error Handle
  error : { name: string, message: string} = { name:'', message:''}; // for firebase error handle
  public loginForm !: FormGroup;
  constructor(private FormBuilder: FormBuilder, private http:HttpClient, private router:Router,private authservice:AuthService) { }

  ngOnInit(): void {
    this.loginForm = this.FormBuilder.group({
      email:['', Validators.required],
      
      passowrd:['', Validators.required]
    })
    
  }
  clearErrorMessage(){
    this.errorMessage = '';
    this.error = {name:'', message:''};
  }
  login()
  {
    this.clearErrorMessage();
    if(this.validateForm(this.email, this.password)){
      this.authservice.loginWithEmail(this.email, this.password)
      .then(()=>
      {
        this.router.navigate(['/user']);
      }).catch((_error:any)=>{
         this.error= _error
         this.router.navigate(['login'])
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















 // login(){
   //  this.http.get<any>("http://localhost:3000/signupUsers")
     //.subscribe(res=>{
       //const user = res.find((a:any)=>{
         //return (a.email === this.loginForm.value.email || a.fullname === this.loginForm.value.email) && a.password === this.loginForm.value.passowrd
       //});
       //if(user){
         //alert("Login Success!!");
         //this.loginForm.reset();
      //   this.router.navigate(['cart'])
      // }else{
       //  alert("User Not Found");
      // }
    // },err=>{
      // alert("Something Went Wrong!!");

    // })
 }


