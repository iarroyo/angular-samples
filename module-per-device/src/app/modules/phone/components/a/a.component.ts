import { Component, OnInit } from '@angular/core';
import { AComponent } from 'src/app/logic/components/a/a.component';

@Component({
  selector: 'app-a-phone',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.scss']
})
export class APhoneComponent extends AComponent implements OnInit {

  constructor() { super('a phone works'); }

  ngOnInit() {
  }

}
