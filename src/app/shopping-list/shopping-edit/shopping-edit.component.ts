import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';
import { Ingredients } from '../../shared/ingredient.model';
// import {Ingredients} from '../../shared/ingredient.model';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
@ViewChild('nameInput') name:ElementRef;
@ViewChild('amountInput') amount:ElementRef;
// @Output() shippingItem = new EventEmitter<Ingredients>();
  constructor(private shoppingService: ShoppingService) { }

  ngOnInit(): void {
  }
  public addToList = () =>{
    const item = {
      name: this.name.nativeElement.value,
      amount: this.amount.nativeElement.value
    }
    const newIngredient = new Ingredients(item.name, item.amount);
    this.shoppingService.AddIngredient(newIngredient);

  }

}
