import {Component, OnDestroy, OnInit} from '@angular/core';
import {AppareilService} from '../services/appareil.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit, OnDestroy {

  appareils: any[];
  isAuth = false;
  appareilSubscription: Subscription;


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
    this.appareilSubscription = this.appareilService.appareilsSubject.subscribe(
      (appareils: any[]) => {
        this.appareils = appareils;
      }
    );
    this.appareilService.emitAppareilSubject();
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

  ngOnDestroy() {
    this.appareilSubscription.unsubscribe();
  }

  onSave() {
    this.appareilService.saveAppareilsToServer();
  }

  onFetch() {
    this.appareilService.getAppareilsFromServer();
  }


}
