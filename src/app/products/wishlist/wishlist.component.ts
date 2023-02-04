import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

wishList:any
eMsg=''
  constructor(private api:ApiService,private router:Router,private cart:CartService) { }

  ngOnInit(): void {
    this.api.getWishlist()
    .subscribe(
      // success response
      (data:any)=>{
        this.wishList = data.result
        if(this.wishList.length==0){
          this.eMsg='empty'
        }
      },
      // client error
      (data:any)=>{
        this.eMsg = data.error.message
      }
    )
  }

  // deleteFromWishlist
  deleteFromWishlit(product:any){
    this.api.deleteFromWishlit(product.id)
    .subscribe(
      (result:any)=>{
        this.wishList = result.wishlist
        if(this.wishList.length==0){
          this.eMsg='empty'
        }
      },
      (result:any)=>{
        alert(result.error.message)
      }
    )
  }
    // addToCart
    addToCart(product:any){
      this.cart.addToCart(product)
      this.deleteFromWishlit(product)
    }
  

}
