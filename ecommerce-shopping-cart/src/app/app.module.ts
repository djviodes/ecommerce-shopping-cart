import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { orderReducer } from './reducers/order.reducer';
import { ProductListComponent } from './product-list/product-list.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { fromEventPattern } from 'rxjs';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      order: orderReducer
    }),
    RouterModule.forRoot([
      { path: "", component: ProductListComponent },
    ])
  ],
  declarations: [
    AppComponent,
    ProductListComponent,
    OrderSummaryComponent
  ],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule { }
