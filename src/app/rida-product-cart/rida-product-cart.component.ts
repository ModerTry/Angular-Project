import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-rida-product-cart',
  templateUrl: './rida-product-cart.component.html',
  styleUrls: ['./rida-product-cart.component.css']
})
export class RidaComponent implements OnInit {
  public ridaCollection:any;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {this.getRidaCollection()}
  url:string ="../../assets/Images/Floral_Lehenga.jpg";
  changeImage(event:any){
    this.url = event.target.src;
    
  }
  getRidaCollection(){
    this.http.get("assets/API/rida.json").subscribe((res:any)=>
      {console.log(res);
        this.ridaCollection = res.ridaCollection;
    })

  }

}

