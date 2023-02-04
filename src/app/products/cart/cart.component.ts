import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import party from "party-js"


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems:any=[]
  grandTotal:any = 0
  total = 0
  updatedTotal:any=0
  discount:any=0
  updateValue=false

  constructor(private cart:CartService,private router:Router) { }

  ngOnInit(): void {
    this.cart.cartItemList.subscribe(
      (data)=>{
        console.log(data);
        this.cartItems = data
        
      }
    )

    this.total = this.cart.getTotal()
    this.grandTotal = this.total.toFixed(2)
  }
  // remove Crt item
  removeCartItem(product:any){
    this.cart.removeCartItem(product)
  }

  // discount50Per
  discount50Per(source:any){
    party.confetti(source)
    this. discount = (this.grandTotal * 50)/100
    let discountValue = this.grandTotal - this.discount
    this.updatedTotal = discountValue.toFixed(2)
    this.updateValue = true
  }
  // discount50Per
  discount75Per(source:any){
    party.confetti(source)
    this. discount = (this.grandTotal * 75)/100
    let discountValue = this.grandTotal - this.discount
    this.updatedTotal = discountValue.toFixed(2)
    this.updateValue = true
      }
  // discount50Per
  discount5Per(source:any){
    party.confetti(source)
    this. discount = (this.grandTotal * 5)/100
    let discountValue = this.grandTotal - this.discount
    this.updatedTotal = discountValue.toFixed(2)
    this.updateValue = true
      }

      // removeAllItem
      removeAllItems(){
        this.cart.removeAllItems()
      }

    // proceed
    proceed(){
      this.cart.removeAllItems()
      alert("YOUR ORDER PLACED SUCCESSFULLY ")
      this.cart.removeAllItems()
      this.router.navigateByUrl('')
    }

        
}
