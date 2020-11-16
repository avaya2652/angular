import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
// import { Ingredients } from '../../shared/ingredient.model';
// import { Recipe } from '../recipe.model'
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

public id: number;
public isEdit: boolean = false;
public recipeForm: FormGroup;
  constructor(private route: ActivatedRoute, private recipeService: RecipeService, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params)=>{
      this.id = +params['id'];
      this.isEdit = +params['id'] ? true: false ;
      
      this.initForm();
    })
    this.initForm();

  }

  private initForm(){
    let recpName='';
    let desc='';
    let imgPath='';
    let recipeIngredients = new FormArray([]);

    if(this.isEdit){
      const recipe = this.recipeService.getRecipe(this.id);
      console.log(recipe.ingredients);
      recpName = recipe.name;
      desc = recipe.description;
      imgPath = recipe.imagePath;
      if(recipe.ingredients.length > 0){
        for(let ingredient of recipe.ingredients){
          console.log(ingredient);
          recipeIngredients.push(
            new FormGroup({
              'ingname': new FormControl(ingredient.name, [Validators.required]),
              'amount': new FormControl(ingredient.amount,[
                Validators.required])
            })
          )
        }
      }

    }
    this.recipeForm = new FormGroup({
      'name': new FormControl(recpName,[Validators.required]),
      'description': new FormControl(desc,[Validators.required]),
      'imagePath': new FormControl(imgPath,[Validators.required]),
      'ingredients': recipeIngredients
    })
  }

  public onRecipeSubmit(){
    // console.log(this.recipeForm.value);
    
    if(this.isEdit){
      this.recipeService.updateRecipe(this.id, this.recipeForm.value);
    } else{
      // this.recipeForm.value.id = +this.id+1;
      this.recipeService.addRecipe(this.recipeForm.value);
    }
    this.onCancelHandler()
  }

  public addIngredients(){
    console.log(this.recipeForm);
   (<FormArray>this.recipeForm.controls.ingredients).push(
     new FormGroup({
      'ingname': new FormControl('', [Validators.required]),
      'amount': new FormControl('', [
        Validators.required])
     })
   )
  }

  public onCancelHandler(){
    // this.recipeForm.reset()
    this.router.navigate(['../'], {relativeTo: this.route})
  }
  public onDeleteIngredientHandler(indx){
    let arrayControls = <FormArray>this.recipeForm.controls['ingredients'];
    arrayControls.removeAt(indx);
  }

}
