import { Component } from '@angular/core';
// import { ShoppingService } from './shopping-list/shopping.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  // providers:[ShoppingService]

})
export class AppComponent {
  public isRecepe: boolean = false
  public getNavigationItemNAme = (name: string) =>{
    this.isRecepe = name === 'recipe'? true: false;
    console.log(this.isRecepe);
  }
}
