import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public isRecepe: boolean = false
  public getNavigationItemNAme = (name: string) =>{
    this.isRecepe = name === 'recipe'? true: false;
    console.log(this.isRecepe);
  }
}
