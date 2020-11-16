import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
@Component({
    templateUrl:"./auth.component.html",
    selector: 'app-auth'

})
export class AuthComponent {
   
    constructor(){}
    public isLoginMode = true;

    onSwitchMode(){
        this.isLoginMode = !this.isLoginMode;
    }
    onSubmit(forms: NgForm){
        console.log(forms.value);
        forms.reset();
    }


}