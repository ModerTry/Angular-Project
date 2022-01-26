import { Component, OnInit,Input, Output } from '@angular/core';
import { CartService } from './../../service/cart.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public totalItem: number=0;

 
  constructor(private CartService:CartService) { }

  ngOnInit(): void {
    this.CartService.getProducts()
    .subscribe(res=>{
      this.totalItem = res.length;

    })
  }
  
}