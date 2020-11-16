import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import {  ActivatedRoute, Router } from '@angular/router';
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

  constructor(private recipeService: RecipeService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // console.log(this.recipe);
  }

  public recipeDetail(){
    // console.log(id);
    // this.recipeService.setRecipeDetail(this.recipe);
    // this.recipeDetailRef.emit(this.recipe);
    this.router.navigate([this.recipe.id], {relativeTo: this.route});
    // this.recipeService.recipeDetailDispatch.emit(this.recipe);
  }

}
