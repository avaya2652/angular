import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {Recipe} from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recepiItem = new EventEmitter<Recipe>();

  public recipes: Recipe[] = [
    new Recipe('Burger', 'Chicken american burger', 'https://images.unsplash.com/photo-1460306855393-0410f61241c7?ixlib=rb-1.2.1&w=1000&q=80'),
    new Recipe('Pasta', 'White sauce pasta', 'https://c.ndtvimg.com/2020-04/dih4ifhg_pasta_625x300_22_April_20.jpg')
  ]

  constructor() { 
  }
  public getDetails(recipe: Recipe){

    this.recepiItem.emit(recipe);

  }

  ngOnInit(): void {
  }
  

}
