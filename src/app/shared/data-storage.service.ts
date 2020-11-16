import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Recipe } from "../recipes/recipe.model";
import { RecipeService } from "../recipes/recipe.service";
import {map, tap} from 'rxjs/operators'
// import { Recipe } from "../recipes/recipe.model";

@Injectable({providedIn: "root"})
export class DataStorageService {
    constructor(private http: HttpClient, 
        private recipeService: RecipeService){}
    
    public storeRecipe = () =>{
        const recipes: Recipe[] = this.recipeService.getRecipeList();

        this.http.put('https://angular-recipe-b54b1.firebaseio.com/recipes.json', recipes).subscribe((resp)=>{
       console.log(resp);
            
        })
    }
    public fetchRecipes = () =>{

       return  this.http.get<Recipe[]>("https://angular-recipe-b54b1.firebaseio.com/recipes.json")
        .pipe(map(recipes=>{
            return recipes.map(recipe=>{
                return {
                    ...recipe, ingredients: recipe.ingredients?  recipe.ingredients : []
                }
            })
        }),
        tap(recipes=>{
            this.recipeService.setRecipes(recipes);
        })
        )
        
        
        // .subscribe(recipes=>{
        // // recipes.map((recipe)=>{
        // //             return {...recipe, ingredients: recipe.ingredients?  recipe.ingredients : []}
        // //         })
        //     this.recipeService.setRecipes(recipes);
        // });
    }
}