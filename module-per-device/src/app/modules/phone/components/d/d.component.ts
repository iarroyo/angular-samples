import { Component, OnInit } from '@angular/core';
import { DComponent } from 'src/app/logic/components/d/d.component';

@Component({
  selector: 'app-d-phone',
  templateUrl: './d.component.html',
  styleUrls: ['./d.component.scss']
})
export class DPhoneComponent extends DComponent implements OnInit {

  constructor() { super('d phone works'); }

  ngOnInit() {
  }

}
