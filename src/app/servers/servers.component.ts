import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  public isButtonEnable:boolean = false;
  public status = "Server not created";
  public serverName  ='Avaya';

  public onButtonClick = () =>{
    this.status = 'Server is created'
  }
  public onupdateServerName = (event:Event) =>{
    // this.serverName = event.target.value;
    console.log(event.target)
  }

  constructor() { }

  ngOnInit(): void {
    setTimeout(()=>{
      this.isButtonEnable = true;
    },2000)
  }

}
