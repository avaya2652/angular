import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredients } from "../shared/ingredient.model";
import { ShoppingService } from "../shopping-list/shopping.service";
import { Recipe } from "./recipe.model";
@Injectable()
export class RecipeService {
    constructor(private shoppingService: ShoppingService){}

    // private recipes: Recipe[] = [
    //     new Recipe(
    //         1,
    //         'Burger1', 
    //         'Chicken american burger',
    //         'https://images.unsplash.com/photo-1460306855393-0410f61241c7?ixlib=rb-1.2.1&w=1000&q=80',
    //         [new Ingredients('bread', 12), new Ingredients('chicken', 1), new Ingredients('cheese',2)]
    //         ),
    //     new Recipe(
    //         2,
    //         'Pasta1', 
    //         'White sauce pasta', 
    //         'https://c.ndtvimg.com/2020-04/dih4ifhg_pasta_625x300_22_April_20.jpg',
    //         [{name: 'White sauce', amount: 2}, {name: 'Pink sauce', amount:12}])
    // ];

    // private recipeDetail: Recipe;
    private recipes: Recipe[] = [];
    public recipeDetailDispatch = new EventEmitter<Recipe>();
    public recipeDispatched = new Subject<Recipe[]>();

    public setRecipes(recipe: Recipe[]){
        this.recipes = recipe;
       this.recipeDispatched.next([...this.recipes]);
    }

    public getRecipeList() {
        let list = [...this.recipes];

        return list;
    }

    public getRecipe(id: number){
        let recipe = this.recipes.filter((rcp)=>{
            return rcp.id === id
        })
        return recipe[0];
    }

   public AddIngrdientsToShhoppingList(ing: Ingredients[]){
    
   }
   public addRecipe(recipe:Recipe){
       const id = this.recipes.length+1
       recipe.id = id;
       if(!recipe.ingredients){
        recipe = {...recipe,ingredients:[]}
       }
       this.recipes.push(recipe);
       console.log(recipe, this.recipes);
       
       this.recipeDispatched.next([...this.recipes]);
       
   }
   public updateRecipe(indx:number, recipe: Recipe){
    let indxOf = this.recipes.findIndex((recp)=>{return recp.id == indx});
    recipe.id = indx;
    this.recipes[indxOf] = recipe;
    console.log(this.recipes);
    this.recipeDispatched.next([...this.recipes]);

   }
   public deleteIngredient(id, idx){
    let indxOf = this.recipes.findIndex((recp)=>{return recp.id == id});
    // this.recipes.

   }
}