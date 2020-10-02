import { EventEmitter } from "@angular/core";
import { Ingredients } from "../shared/ingredient.model";

export class ShoppingService{
    private ingradients: Ingredients[] = [
        new Ingredients('Apple', 10),
        new Ingredients('Tomato', 5)
    ]

    public updateShoppingList = new EventEmitter<Ingredients[]>();

    public getShhoppingList(){
        let list: Ingredients[] = [...this.ingradients];
        return list;

    }
    public AddIngredient(ingt: Ingredients){
        this.ingradients.push(new Ingredients(ingt.name, ingt.amount));
        console.log(this.ingradients);
        this.updateShoppingList.emit([...this.ingradients]);
    }
    public AddIngredients(ingt:Ingredients[]){
        this.ingradients.push(...ingt);
        this.updateShoppingList.emit([...this.ingradients]);

    }
}