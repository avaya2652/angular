import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-app';
  public servers= [];

  public onServerAdded = (serverData: {name:string, content: string}) =>{
    this.servers.push({
      type: 'Server',
      name: serverData.name,
      content: serverData.content
    })
    console.log(this.servers);
  }
public onBlueprintAdded = (bluePrintData: {name: string, content: string})=>{
  this.servers.push({
    type:'Blueprint',
    name:bluePrintData.name,
    content: bluePrintData.content 
  })
}

}
