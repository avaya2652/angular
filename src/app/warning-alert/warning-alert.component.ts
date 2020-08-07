import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  template: `
    <p class="warning">Warning Alert !</p>
  `,
  styles: [`
  p{
    color: red;
    padding: 10px;
    margin: 5 auto;
    background: pink;
    border:1px solid red;
  }
  
  `]
})
export class WarningAlertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
