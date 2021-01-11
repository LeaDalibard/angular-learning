import {Component, OnInit} from '@angular/core';
import {AppareilService} from '../services/appareil.service';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {

  appareils: any[];
  isAuth = false;

  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });

  constructor(private appareilService: AppareilService) {
  }

  ngOnInit(): void {
    this.appareils = this.appareilService.appareils;
  }

  onClickTurnOn() {
    this.appareilService.switchOnAll();
  }

  onClickTurnOff() {
    if (confirm('Are you sure you want to turn all devices off ?')) {
      this.appareilService.switchOffAll();
    } else {
      return null;
    }
  }

}