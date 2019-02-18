import { Component, OnInit } from '@angular/core';
import { EComponent } from 'src/app/logic/components/e/e.component';

@Component({
  selector: 'app-e',
  templateUrl: './e.component.html',
  styleUrls: ['./e.component.scss']
})
export class EDesktopComponent extends EComponent implements OnInit {

  constructor() { super('e works'); }

  ngOnInit() {
  }

}
