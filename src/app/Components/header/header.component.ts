import { Component, OnInit,Input, Output, HostListener } from '@angular/core';
import { CartService } from './../../service/cart.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public totalItem: number=0;
  public searchTerm: string = '';

 
  constructor(private CartService:CartService) { }

  ngOnInit(): void {
    this.CartService.getProducts()
    .subscribe(res=>{
      this.totalItem = res.length;

    })
  }
  search(event:any){
    this.searchTerm=(event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.CartService.search.next(this.searchTerm);
  }
  header_variable=false;
  @HostListener("document:scroll")
  scrollfunction(){
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0){
      this.header_variable= true;
    } 
    else{
      this.header_variable= false;
    }
  }
}