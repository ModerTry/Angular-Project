import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pannel',
  templateUrl: './pannel.component.html',
  styleUrls: ['./pannel.component.css']
})
export class PannelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}
  url:string ="../../assets/Images/Product_3.jpg";
  changeImage(event:any){
    this.url = event.target.src;
    
  }

}
