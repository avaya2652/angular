import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {
  public userName = '';

  constructor() { }

  ngOnInit(): void {
  }


  public updateUserName = (event) =>{
    this.userName = '';
  }

}
