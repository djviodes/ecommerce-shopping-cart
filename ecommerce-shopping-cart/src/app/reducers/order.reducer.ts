import { Action } from "@ngrx/store";
import { Order } from "../models/order.model";
import * as OrderActions from "../actions/order.actions";

const initialState: Order = {
    freeTicketAmount: 0,
    alumniTicketAmount: 0,
    donationAmount: 0,
    bookGsBsAmount: 0
}

export function orderReducer(state: Order[] = [initialState], action: OrderActions.Actions) {
    switch(action.type) {
        case OrderActions.ADD_ORDER:
            return [...state, action.payload];
        case OrderActions.UPDATE_ORDER:
            return [...state, action.payload];
        case OrderActions.REMOVE_ORDER:
            state.splice(action.payload, 1);
            return state;
        default: 
            return state
    }
}