import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import {Recipe} from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  
    @Input() recipe : Recipe;
  //  @Output() recipeDetailRef = new EventEmitter<Recipe>();

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
  }

  public recipeDetail(){
    // this.recipeService.setRecipeDetail(this.recipe);
    // this.recipeDetailRef.emit(this.recipe);
    this.recipeService.recipeDetailDispatch.emit(this.recipe);
  }

}
