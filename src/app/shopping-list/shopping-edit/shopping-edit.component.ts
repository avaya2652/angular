import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter  } from '@angular/core';
import {Ingredients} from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
@ViewChild('nameInput') name:ElementRef;
@ViewChild('amountInput') amount:ElementRef;
@Output() shippingItem = new EventEmitter<Ingredients>();
  constructor() { }

  ngOnInit(): void {
  }
  public addToList = () =>{
    const item = {
      name: this.name.nativeElement.value,
      amount: this.amount.nativeElement.value
    }
    this.shippingItem.emit(item);

  }

}
