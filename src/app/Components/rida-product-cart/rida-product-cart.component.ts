import { CartService } from './../../service/cart.service';
import { AuthService } from 'src/app/auth.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rida-product-cart',
  templateUrl: './rida-product-cart.component.html',
  styleUrls: ['./rida-product-cart.component.css']
})
export class RidaProductCartComponent implements OnInit {
  public ridaCollection:any;
  searchKey:string = "";
 

  constructor(private http:HttpClient,private router:Router, private CartService:CartService, private auth:AuthService) { }
 
  ngOnInit(): void {
    this.getRidaCollection();
    this.getData();
  }

  url:string ="../../assets/Images/Floral_Lehenga.jpg";
  changeImage(event:any)
  {
    this.url = event.target.src;
  }
  getRidaCollection(){
    this.http.get("assets/API/rida.json").subscribe((res:any)=>
      {console.log(res);
        this.ridaCollection = res.ridaCollection;

        this.ridaCollection.forEach((a:any) => {
          Object.assign(a,{quantity:1,ridaPrice:a.ridaPrice});
        });
    })

    this.CartService.search.subscribe((val:any)=>{
      this.searchKey =val;
    })
   
  }

addtoCart(item:any){
  this.CartService.addtoCart(item);

}
p:any;
data:any=[];
getData(){
  this.auth.getData().subscribe(
    (data) => {
      this.data = data;
    }
  )
}




}

