import { Component, OnInit } from '@angular/core';
import {Ingredients} from '../shared/ingredient.model'

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
public ingredients: Ingredients[] = [
 new Ingredients('Apple', 10),
 new Ingredients('Tomato', 5)
];
  /**
   * addItemToList
item   */

  public addItemToList(item: Ingredients) {
    console.log(item)
    this.ingredients.push(new Ingredients(item.name, item.amount));

  }

}
