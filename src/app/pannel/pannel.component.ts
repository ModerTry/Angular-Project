import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pannel',
  templateUrl: './pannel.component.html',
  styleUrls: ['./pannel.component.css']
})
export class PannelComponent implements OnInit {
  public pannelCollection:any;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {}
   
  url:string ="../../assets/Images/Product_3.jpg";
  changeImage(event:any){
    this.url = event.target.src; 
  }
 
}
