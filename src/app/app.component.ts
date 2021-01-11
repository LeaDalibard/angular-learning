import {Component, OnInit} from '@angular/core';
import {AppareilService} from './services/appareil.service';
import {Observable} from 'rxjs';
import {interval} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  secondes: number;

  constructor(private appareilService: AppareilService) {
  }

  ngOnInit() {
    const counter = interval(1000);
    counter.subscribe(
      (value) => {
        this.secondes = value;
      },
      (error) => {
        console.log('Oups, an error occured :' + error);
      },
      () => {
        console.log('Observable complete');
      }
    );
  }


}

// Bouton s'active après 4 sec, simulation d'authentification
