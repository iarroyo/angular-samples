import { Component, OnInit } from '@angular/core';
import { DComponent } from 'src/app/logic/components/d/d.component';

@Component({
  selector: 'app-d-tablet',
  templateUrl: './d.component.html',
  styleUrls: ['./d.component.scss']
})
export class DTabletComponent extends DComponent implements OnInit {

  constructor() { super('d tablet works'); }

  ngOnInit() {
  }

}
