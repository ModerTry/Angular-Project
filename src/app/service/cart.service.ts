import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cartItemList:any=[]
  public ridaCollection = new BehaviorSubject<any>([]);

  constructor() { }
  getProducts(){
    return this.ridaCollection.asObservable();
  }
  setProduct(product:any){
    this.cartItemList.push(...product);
    this.ridaCollection.next(product);
  }
  addtoCart(product:any){
    this.cartItemList.push(product);
    this.ridaCollection.next(this.cartItemList);
    this.getTotalPrice();
    console.log(this.cartItemList)
  }
  getTotalPrice() : number{
    let grandTotal = 0;
    this.cartItemList.map((a:any)=>{
      grandTotal += a.total;
    })
    return grandTotal;
  }
  removeCartItem(product:any){
    this.cartItemList.map((a:any,index:any)=>{
      if(product.id===a.id){
        this.cartItemList.splice(index,1);
      }
    })
    this.ridaCollection.next(this.cartItemList);
  }
  removeAllCart(){
    this.cartItemList = []
    this.ridaCollection.next(this.cartItemList);
  }
}
