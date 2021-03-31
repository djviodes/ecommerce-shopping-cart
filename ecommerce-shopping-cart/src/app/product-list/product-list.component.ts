import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import * as moment from 'moment';

import { products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products = products
  values = [0, 1, 2, 3, 4, 5, 6]
  orderSummaryForm = this.formBuilder.group({
    numberOfTickets: 0
  })
  addToCart(product: string, amount: any) {
    this.cartService.addToCart(product, amount)
  }

  constructor(
    private formBuilder: FormBuilder, 
    private cartService: CartService
  ) {}

  saleTimeLeft(saleStart: number, saleEnd: number) {
    let now = new Date().getTime()

    if (now > saleStart && now < saleEnd) {
      let remainingTime = saleEnd - now
      let duration = moment.duration(remainingTime)

      if (duration.asDays() > 1) {
          return "Sale ends in " + Math.floor(duration.asDays()) + " days"
      } else {
        if (Math.floor(duration.asHours()) > 1) {
            return "Sale ends in " + Math.floor(duration.asHours()) + " hours"
        } else {
          if (Math.floor(duration.asMinutes()) > 1) {
            return "Sale ends in " + Math.floor(duration.asMinutes()) + " minutes"
          } else {
            return "Sale ends in 1 minute"
          }
        }
      }
    } else {
      return null
    }
  }

  ngOnInit(): void {
  }

}
