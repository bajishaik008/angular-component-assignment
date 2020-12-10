import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  templateUrl: './warning-alert.component.html',
  //styleUrls: ['./warning-alert.component.css']
  styles:[`
    h3
    {
      color: red
    }
    `]
})
export class WarningAlertComponent implements OnInit {

  message:string="Warning Alert"
  
  constructor() { }

  ngOnInit(): void {
  }

}
