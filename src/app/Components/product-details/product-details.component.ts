import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  public ridaCollection:any;
 

  constructor(private http:HttpClient) { }

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
    })
  }

  

}
