import {Component, OnInit} from '@angular/core';
import {AppareilService} from './services/appareil.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  constructor(private appareilService: AppareilService) {
  }

  ngOnInit() {
  }


}

// Bouton s'active après 4 sec, simulation d'authentification
