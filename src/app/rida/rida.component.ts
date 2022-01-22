
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rida',
  templateUrl: './rida.component.html',
  styleUrls: ['./rida.component.css']
})
export class RidaComponent implements OnInit {
 

  constructor() { }

  ngOnInit(): void {}
  url:string ="../../assets/Images/Floral_Lehenga.jpg";
  changeImage(event:any){
    this.url = event.target.src;
    
  }
  

  }


