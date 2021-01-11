export class AppareilService {
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
}
