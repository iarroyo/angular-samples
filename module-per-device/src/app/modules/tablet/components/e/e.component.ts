import { Component, OnInit } from '@angular/core';
import { EComponent } from 'src/app/logic/components/e/e.component';

@Component({
  selector: 'app-e-tablet',
  templateUrl: './e.component.html',
  styleUrls: ['./e.component.scss']
})
export class ETabletComponent extends EComponent implements OnInit {

  constructor() { super('e tablet works'); }

  ngOnInit() {
  }

}
