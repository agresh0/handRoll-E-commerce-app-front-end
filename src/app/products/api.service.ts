import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  searchKey = new BehaviorSubject('')

  constructor(private http:HttpClient) {  }

      // getAllProducts
      getAllProducts(){
        return this.http.get('http://localhost:3000/all-products')
      }

      // addTo Wishlist function
      addToWishlist(product:any){
        const body = {
          id:product.id,
        title:product.title,
        price:product.price,
        description:product.description,
        category:product.category,
        image:product.image,
        rating:{
            rate:product.rating.rate,
            count:product.rating.count
        }
        }

        return this.http.post('http://localhost:3000/add-to-wishlist',body)
      }

      // getWishlist api
      getWishlist(){
        return this.http.get('http://localhost:3000/get-wishlist')
      }

      // deleteFromWishlit
      deleteFromWishlit(id:any){
        return this.http.delete('http://localhost:3000/delete-item-wishlist/'+id)
      }
  
}
