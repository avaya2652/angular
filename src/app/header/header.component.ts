import { Component, Output, EventEmitter } from "@angular/core";

@Output() menuName = new EventEmitter();

@Component({
    selector: 'app-header',
    templateUrl:'./header.component.html',
    styleUrls:['./header.component.css']
})


export class HeaderComponent{
    public menuClickedHAndler = (type) =>{
        // console.log(type);
        this.menuName.emit(type);
    }
}