import { Component, OnInit } from '@angular/core';
import { ShoppingService } from './shopping.service';
import {Ingredients} from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  public ingredients: Ingredients[];
  constructor(private shoppingService: ShoppingService) { }

  ngOnInit(): void {
    this.ingredients = this.shoppingService.getShhoppingList();
    this.shoppingService.updateShoppingList.subscribe((ingredients:Ingredients[])=>{
      console.log(ingredients);
      this.ingredients = ingredients;
    })
  }
  onEditItem(id: number){
    console.log(id)
    this.shoppingService.startedEditing.next(id);
  }

}
