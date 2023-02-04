import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItemsListArray:any = []
  cartItemList = new BehaviorSubject([])

  constructor() { }

  
  // add to cart
  addToCart(product:any){
    this.cartItemsListArray.push(product)
    this.cartItemList.next(this.cartItemsListArray)
    console.log(this.cartItemList);
    let total = this.getTotal()
    console.log(total);
    
    
  }
// total price
getTotal(){
  let grandSum = 0
  this.cartItemsListArray.map((item:any)=>{
    grandSum += item.price
  })
  return grandSum
}

// remove a single item
removeCartItem(product:any){
  this.cartItemsListArray.map((item:any,index:any)=>{
    if(product.id == item.id){
      this.cartItemsListArray.splice(index,1)
    }
  })
  this.cartItemsListArray.next(this.cartItemsListArray)
}

  // removeAllItem
    removeAllItems(){
    this.cartItemsListArray = []
    this.cartItemList.next(this.cartItemsListArray)
      }

}
