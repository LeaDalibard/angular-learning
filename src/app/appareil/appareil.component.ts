import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  //appareilName: string = 'Washing Machine';
  @Input() appareilName: string;
  @Input() appareilStatus: string ;


  constructor() { }

  ngOnInit(): void {
  }

  getStatus() {
    return this.appareilStatus;
  }

  getColor() {
    if(this.appareilStatus ==='on'){
      return 'green';
    }
    else if (this.appareilStatus ==='off'){
      return'red';
    }
  }

}
