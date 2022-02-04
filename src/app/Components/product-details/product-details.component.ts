import { RidaProductCartComponent } from './../rida-product-cart/rida-product-cart.component';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  public ridaDetails:any;

  constructor(private http:HttpClient,private router:ActivatedRoute) { }

  ngOnInit(): void {this.getRidaDetails()}
  url:string ="../../assets/Images/Floral_Lehenga.jpg";
  changeImage(event:any)
  {
    this.url = event.target.src;

  }
  getRidaDetails(){
    this.http.get("assets/API/detail.json").subscribe((res:any)=>
      {console.log(res);
        this.ridaDetails = res;
    })
  }
 

}
