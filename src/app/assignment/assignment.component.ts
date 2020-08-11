import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public isDisplay:boolean = true;
  public log:any = [];
  
  public toggleText = () =>{
    this.isDisplay = !this.isDisplay;
    this.log.push(Date.now());
  }

}
