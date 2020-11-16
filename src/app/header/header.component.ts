import { Component, Output, EventEmitter } from "@angular/core";
import { DataStorageService } from "../shared/data-storage.service";


@Component({
    selector: 'app-header',
    templateUrl:'./header.component.html',
    styleUrls:['./header.component.css']
})


export class HeaderComponent{

    constructor(private dataStorageService: DataStorageService){}
    
    @Output() menuName = new EventEmitter<string>();

    public menuClickedHAndler = (type: string) =>{
        // console.log(type);
        this.menuName.emit(type);
    }
    public addAllRecipes = () =>{
        this.dataStorageService.storeRecipe();
    }
    public fetchRecipes = () =>{
        this.dataStorageService.fetchRecipes().subscribe();
    }
}