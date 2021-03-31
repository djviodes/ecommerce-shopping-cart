import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items : string[] = [];

  addToCart(product: string, amount: string) {
    let counter: number = 1
    let amountNumber = Number(amount)
    while (counter <= amountNumber) {
      this.items.push(product)
      counter = counter + 1
    }
    console.log("This is my items array: ", this.items)
  }

  getItems() {
    return this.items
  }

  clearCart() {
    this.items = []
    return this.items
  }

  constructor(private http: HttpClient) { }
}
