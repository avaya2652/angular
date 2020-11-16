// import { EventEmitter } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredients } from "../shared/ingredient.model";

export class ShoppingService{
    private ingradients: Ingredients[] = [
        new Ingredients('Apple', 10),
        new Ingredients('Tomato', 5)
    ]
    public startedEditing = new Subject<number>();
    public updateShoppingList = new Subject<Ingredients[]>();

    public getShhoppingList(){
        let list: Ingredients[] = [...this.ingradients];
        return list;

    }
    public AddIngredient(ingt: Ingredients){
        this.ingradients.push(new Ingredients(ingt.name, ingt.amount));
        console.log(11111111111);
        this.updateShoppingList.next([...this.ingradients]);
    }
    public AddIngredients(ingt:Ingredients[]){
        this.ingradients.push(...ingt);
        console.log(22222);

        this.updateShoppingList.next([...this.ingradients]);

    }
    public getIngredient(id){
        return this.ingradients[id];
    }
    public edidIngredient(id, updatedValue: Ingredients){
        this.ingradients[id] = updatedValue;
        console.log(333);

        this.updateShoppingList.next([...this.ingradients]);
    }
    public deleteIngredient(index){
        this.ingradients.splice(index,1);
       console.log(this.ingradients, index);
       this.updateShoppingList.next(this.ingradients);

    }
}