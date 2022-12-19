import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {CardItem} from "../models/card-item.model";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items$=new BehaviorSubject<CardItem[]>([]);

  getCart(){
    return this.items$.asObservable();
  }
  addToCart(newItem:CardItem){
    this.items$.next([... this.items$.getValue(), newItem]);
  }
  removeItem(id:number){
    this.items$.next(this.items$.getValue().filter(item => item.id != id));
  }

}
