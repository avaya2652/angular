import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import {Recipe} from '../recipe.model'
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {

  public recipes:Recipe[] = [];
  public subscription: Subscription;

  constructor(private recipeService: RecipeService, private router: Router, private route: ActivatedRoute) { 
  }

  ngOnInit(): void {
    this.subscription = this.recipeService.recipeDispatched.subscribe((recp)=>{
      this.recipes = recp;
    })
    this.recipes = this.recipeService.getRecipeList();
  }

  public newRecipe = () =>{
    console.log(111111111111111);
    this.router.navigate(['new'],{relativeTo: this.route})
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
