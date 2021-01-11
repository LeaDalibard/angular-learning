import {Component, OnInit} from '@angular/core';
import {AppareilService} from './services/appareil.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  isAuth = false;
  appareils: any[];

  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });

  constructor(private appareilService: AppareilService) {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }

  ngOnInit() {
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

// Bouton s'active après 4 sec, simulation d'authentification
