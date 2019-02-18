import { Component, OnInit } from '@angular/core';
import { EComponent } from 'src/app/logic/components/e/e.component';

@Component({
  selector: 'app-e-phone',
  templateUrl: './e.component.html',
  styleUrls: ['./e.component.scss']
})
export class EPhoneComponent extends EComponent implements OnInit {

  constructor() { super('e phone works'); }

  ngOnInit() {
  }

}
