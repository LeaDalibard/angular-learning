import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  isAuth = false;

  appareils = [
    {
      name: 'Washing Machine',
      status: 'off'
    },
    {
      name: 'Fridge',
      status: 'on'
    },
    {
      name: 'Computer',
      status: 'off'
    }
  ];


  constructor() {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }

  onClickTurnOn(){
    console.log('Turn everything on');
  }
}
// Bouton s'active après 4 sec, simulation d'authentification
