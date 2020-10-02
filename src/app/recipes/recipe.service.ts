import { EventEmitter, Injectable } from "@angular/core";
import { Ingredients } from "../shared/ingredient.model";
import { ShoppingService } from "../shopping-list/shopping.service";
import { Recipe } from "./recipe.model";
@Injectable()
export class RecipeService {
    constructor(private shoppingService: ShoppingService){}

    private recipes: Recipe[] = [
        new Recipe(
            'Burger1', 
            'Chicken american burger',
            'https://images.unsplash.com/photo-1460306855393-0410f61241c7?ixlib=rb-1.2.1&w=1000&q=80',
            [new Ingredients('bread', 12), new Ingredients('chicken', 1), new Ingredients('cheese',2)]
            ),
        new Recipe(
            'Pasta1', 
            'White sauce pasta', 
            'https://c.ndtvimg.com/2020-04/dih4ifhg_pasta_625x300_22_April_20.jpg',
            [{name: 'White sauce', amount: 2}, {name: 'Pink sauce', amount:12}])
    ];

    // private recipeDetail: Recipe;
    public recipeDetailDispatch = new EventEmitter<Recipe>();

    public getRecipeList() {
        let list = [...this.recipes];
        return list;
    }

   public AddIngrdientsToShhoppingList(ing: Ingredients[]){
    
   }
}