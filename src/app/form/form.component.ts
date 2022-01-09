import { User } from './../user';
import { Component, OnInit } from '@angular/core';
import { EnrollmentService} from '../enrollment.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
   topics=["Angular","React","Veu"];
   topicHasError= true;

   userModel=new User('Rob', 'rob@test.com', 8827669073,'default','morning',true );

  constructor(private _enrollmentService: EnrollmentService){}

   validateTopic(value:any){
     if (value === 'default'){
       this.topicHasError=true;
     }
     else{
       this.topicHasError=false;
     }
   }
onSubmit(){
  this._enrollmentService.enroll(this.userModel)
  .subscribe(
    data=> console.log('Success', data),
    error => console.error('Error', error)
  )
}


  ngOnInit(): void {
  }

}
