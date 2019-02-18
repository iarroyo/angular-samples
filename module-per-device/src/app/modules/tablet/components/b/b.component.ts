import { Component, OnInit } from '@angular/core';
import { BComponent } from 'src/app/logic/components/b/b.component';

@Component({
  selector: 'app-b-tablet',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.scss']
})
export class BTabletComponent extends BComponent implements OnInit {

  constructor() { super('b tablet works'); }

  ngOnInit() {
  }

}
