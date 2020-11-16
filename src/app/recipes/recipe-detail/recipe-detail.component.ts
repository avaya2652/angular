import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Ingredients } from '../../shared/ingredient.model';
import { ShoppingService } from '../../shopping-list/shopping.service';
import {Recipe} from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  public recipe: Recipe;
  public id: number;
  constructor(
    private shoppingService: ShoppingService, 
    private route: ActivatedRoute,
    private recipeService: RecipeService) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];

    this.route.params.subscribe((params:Params)=>{
     this.id = params['id'];
     this.recipe = this.recipeService.getRecipe(+this.id);
    })

  }

  // public addToShoppingList(){
  //   console.log(this.dtls);
  //   this.dtls.ingredients.map((ing)=>{
  //     return this.shoppingService.AddIngredient(ing);
  //   })
  // }
  
  public addToShoppingList(){
    this.shoppingService.AddIngredients(this.recipe.ingredients);
  }
}
