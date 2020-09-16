import { Component, Output, EventEmitter } from "@angular/core";


@Component({
    selector: 'app-header',
    templateUrl:'./header.component.html',
    styleUrls:['./header.component.css']
})


export class HeaderComponent{
    
    @Output() menuName = new EventEmitter<string>();

    public menuClickedHAndler = (type: string) =>{
        // console.log(type);
        this.menuName.emit(type);
    }
}