import { Order } from './models/order.model';

export interface AppState {
    readonly order: Order[];
}