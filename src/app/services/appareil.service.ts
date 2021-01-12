import {Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class AppareilService {

  appareilsSubject = new Subject<any[]>();

  //subject gérera des arrays de type any

  private appareils = [
    {
      id: 1,
      name: 'Washing Machine',
      status: 'off'
    },
    {
      id: 2,
      name: 'Fridge',
      status: 'on'
    },
    {
      id: 3,
      name: 'Computer',
      status: 'off'
    }
  ];

  constructor(private httpClient: HttpClient) {
  }

  emitAppareilSubject() {
    this.appareilsSubject.next(this.appareils.slice());
  }


  switchOnAll() {
    for (let appareil of this.appareils) {
      appareil.status = 'on';
    }
  }

  switchOffAll() {
    for (let appareil of this.appareils) {
      appareil.status = 'off';
    }
  }

  switchOneOn(i: number) {
    this.appareils[i].status = 'on';
  }

  switchOneOff(i: number) {
    this.appareils[i].status = 'off';
  }

  getAppareilById(id: number) {
    const appareil = this.appareils.find(
      (s) => {
        return s.id === id;
      }
    );
    return appareil;
  }

  addAppareil(name: string, status: string) {
    const appareilObject = {
      id: 0,
      name: '',
      status: ''
    };
    appareilObject.name = name;
    appareilObject.status = status;
    appareilObject.id = this.appareils[(this.appareils.length - 1)].id + 1;
    this.appareils.push(appareilObject);
    this.emitAppareilSubject();
  }

  //subject declared to keep everything updated

  saveAppareilsToServer() {
    this.httpClient
      .post('https://angular-learning-1db96-default-rtdb.europe-west1.firebasedatabase.app/appareils.json', this.appareils)
      .subscribe(
        () => {
          console.log('Saving done');
        },
        (error) => {
          console.log('Error : ' + error);
        }
      );
  }

}
