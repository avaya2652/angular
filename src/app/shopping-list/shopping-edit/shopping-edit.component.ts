import { Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit, ViewChild  } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ingredients } from '../../shared/ingredient.model';
// import {Ingredients} from '../../shared/ingredient.model';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
// @ViewChild('nameInput') name:ElementRef;
// @ViewChild('amountInput') amount:ElementRef;
// @Output() shippingItem = new EventEmitter<Ingredients>();
  subscription: Subscription
  public editedItem:Ingredients;
  public isEdit = false;
  public editedItemId: number;
  @ViewChild('f',{static: true}) formEdit: NgForm;
  constructor(private shoppingService: ShoppingService) { }

  ngOnInit(): void {
    this.subscription = this.shoppingService.startedEditing
      .subscribe((id:number)=>{
        this.isEdit = true;
        this.editedItem = this.shoppingService.getIngredient(id);
        this.editedItemId = id;
        this.formEdit.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        })

      })
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
  // public addToList = () =>{
  //   const item = {
  //     name: this.name.nativeElement.value,
  //     amount: this.amount.nativeElement.value
  //   }
  //   const newIngredient = new Ingredients(item.name, item.amount);
  //   this.shoppingService.AddIngredient(newIngredient);

  // }
  public onAddItem(form:NgForm){
    const newIngredient = new Ingredients(form.value.name, form.value.amount);

    if(this.isEdit){
      this.shoppingService.edidIngredient(this.editedItemId, newIngredient);
      // this.formEdit.reset();
      this.isEdit = false;

    }else{
      this.shoppingService.AddIngredient(newIngredient);
    }
    this.formEdit.reset();
   
  }
  public onClear(){
    this.formEdit.reset();
    this.isEdit = false;
  }

  public onDelete(){
    if(this.isEdit){
      this.shoppingService.deleteIngredient(this.editedItemId);
      this.onClear();
    }
  }

}
