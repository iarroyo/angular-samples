import { Component, OnInit } from '@angular/core';
import { DComponent } from 'src/app/logic/components/d/d.component';

@Component({
  selector: 'app-d',
  templateUrl: './d.component.html',
  styleUrls: ['./d.component.scss']
})
export class DDesktopComponent extends DComponent implements OnInit {

  constructor() { super('d works'); }

  ngOnInit() {
  }

}
