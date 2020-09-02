import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() addServer = new EventEmitter<{name: string, content: string}>();
  @Output() addBluePrint = new EventEmitter <{name: string, content: string}>();
  @ViewChild('serverContent',{static: true}) serverContent:ElementRef;

  public serverName = '';
  // public serverContent = '';
  constructor() { }

  ngOnInit(): void {
  }
  public addServerHandler = () =>{
    this.addServer.emit({
      name:this.serverName,
      content:this.serverContent.nativeElement.value
    })

    // this.servers.push({
    //   name: this.serverName,
    //   content: this.serverContent
      
    // })
  }
  public addBluePrintHandler = () =>{
   this.addBluePrint.emit({
     name: this.serverName,
     content: this.serverContent.nativeElement.value
   })

  }

}
