import { Component, OnInit, Input } from '@angular/core';
import { Ingredients } from '../../shared/ingredient.model';
import { ShoppingService } from '../../shopping-list/shopping.service';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() dtls: Recipe;
  constructor(private shoppingService: ShoppingService) { }

  ngOnInit(): void {
  }

  // public addToShoppingList(){
  //   console.log(this.dtls);
  //   this.dtls.ingredients.map((ing)=>{
  //     return this.shoppingService.AddIngredient(ing);
  //   })
  // }
  
  public addToShoppingList(){
    this.shoppingService.AddIngredients(this.dtls.ingredients);
  }
}
