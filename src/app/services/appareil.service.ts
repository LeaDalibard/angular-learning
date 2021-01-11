export class AppareilService {
  appareils = [
    {
      id:1,
      name: 'Washing Machine',
      status: 'off'
    },
    {
      id:2,
      name: 'Fridge',
      status: 'on'
    },
    {
      id:3,
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

  switchOneOn(i: number) {
    this.appareils[i].status = 'on';
  }

  switchOneOff(i: number) {
    this.appareils[i].status = 'off';
  }

  getAppareilById(id:number){
    const appareil=this.appareils.find(
      (s)=>{
        return s.id===id;
      }
    );
    return appareil;
  }
}
