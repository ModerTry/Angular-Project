import { CartService } from './../service/cart.service';
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
 

  constructor(private http:HttpClient,private router:Router, private CartService:CartService) { }

  ngOnInit(): void {this.getRidaCollection()}
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
          Object.assign(a,{quantity:1,total:a.price});
        });
    })
  }
 // onSelect(item:any){
   // this.router.navigate(['/productDetails','ridaCollection.id']);
  //}
addtoCart(item:any){
  this.CartService.addtoCart(item);

}

}

