import { Component, OnInit } from '@angular/core';
import { AComponent } from 'src/app/logic/components/a/a.component';

@Component({
  selector: 'app-a-tablet',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.scss']
})
export class ATabletComponent extends AComponent implements OnInit {

  constructor() { super('a tablet works'); }

  ngOnInit() {
  }

}
