import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  isAuth = false;

  appareilOne = 'Washing Machine';
  appareilTwo = 'Fridge';
  appareilThree = 'Computer';

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
