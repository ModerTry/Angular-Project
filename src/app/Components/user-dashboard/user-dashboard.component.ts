import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { UserModel } from './user.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApiService } from 'src/app/shared/api.service';




@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  formValue !: FormGroup;
  userModelObj : UserModel = new UserModel();
  userData !: any;
  showAdd !: boolean;
  showUpdate !: boolean;

  constructor(public authservice:AuthService, public router:Router,private formbuilder:FormBuilder, private api:ApiService) { }

  ngOnInit(): void {
this.formValue = this.formbuilder.group({
      fullname : [''],
      email : [''],
      mobile : [''],
      password : ['']
    })
    this.getAllUser();
  }
 clickAdduser(){
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }
postUserDetails(){
  this.userModelObj.fullname = this.formValue.value.fullname;
  this.userModelObj.email = this.formValue.value.email;
  this.userModelObj.mobile = this.formValue.value.mobile;
  this.userModelObj.password = this.formValue.value.password;

  this.api.postUser(this.userModelObj)
  .subscribe(res=>{
    console.log(res);
    alert("User Added Successfully!!!")
    let ref = document.getElementById('cancel')
    ref?.click();
    this.formValue.reset();
    this.getAllUser();
  },
  err=>{
    alert("Something Went Wrong!!")
  })
}
getAllUser(){
  this.api.getUser()
  .subscribe(res=>{
    this.userData = res;
  })
}
deleteUser(row : any){
  this.api.deleteUser(row.id)
  .subscribe(res=>{
    alert("User Deleted!!!");
    this.getAllUser();
  })
}
onEdit(row : any){
   this.showAdd = false;
   this.showUpdate = true;
   this.userModelObj.id = row.id;
   this.formValue.controls['fullname'].setValue(row.fullname);
   this.formValue.controls['email'].setValue(row.email);
   this.formValue.controls['mobile'].setValue(row.mobile);
   this.formValue.controls['password'].setValue(row.password);
 }
updateUserDetails(){
  this.userModelObj.fullname = this.formValue.value.fullname;
  this.userModelObj.email = this.formValue.value.email;
  this.userModelObj.mobile = this.formValue.value.mobile;
  this.userModelObj.password = this.formValue.value.password;

  this.api.updateUser(this.userModelObj,this.userModelObj.id)
  .subscribe(res=>{
    alert("Updated Successfully!!!");
    let ref = document.getElementById('cancel')
    ref?.click();
    this.formValue.reset();
    this.getAllUser();
  })
}

}
