import { Injectable } from "@angular/core";
import { Action } from "@ngrx/store";
import { Order } from "../models/order.model";

export const ADD_ORDER = "[ORDER] Add"
export const UPDATE_ORDER = "[ORDER] Update"
export const REMOVE_ORDER = "[ORDER] Remove"

export class AddOrder implements Action {
    readonly type = ADD_ORDER

    constructor(public payload: Order) {}
}

export class UpdateOrder implements Action {
    readonly type = UPDATE_ORDER

    constructor(public payload: Order) {}
}

export class RemoveOrder implements Action {
    readonly type = REMOVE_ORDER

    constructor(public payload: number) {}
}

export type Actions = AddOrder | UpdateOrder | RemoveOrder