import { Component, OnInit } from '@angular/core';
import { BComponent } from 'src/app/logic/components/b/b.component';

@Component({
  selector: 'app-b-phone',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.scss']
})
export class BPhoneComponent extends BComponent implements OnInit {

  constructor() { super('b phone works'); }

  ngOnInit() {
  }

}
