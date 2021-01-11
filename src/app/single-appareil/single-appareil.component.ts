import {Component, OnInit} from '@angular/core';
import {AppareilService} from '../services/appareil.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-single-appareil',
  templateUrl: './single-appareil.component.html',
  styleUrls: ['./single-appareil.component.scss']
})
export class SingleAppareilComponent implements OnInit {

  constructor(private appareilService: AppareilService, private route:ActivatedRoute) {
  }

  name: string = 'Appareil';
  status: string = 'Status';

  ngOnInit(): void {
    this.name=this.route.snapshot.params['id'];
  }

}
