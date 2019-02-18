import { Component, OnInit } from '@angular/core';
import { CComponent } from 'src/app/logic/components/c/c.component';

@Component({
  selector: 'app-c-phone',
  templateUrl: './c.component.html',
  styleUrls: ['./c.component.scss']
})
export class CPhoneComponent extends CComponent implements OnInit {

  constructor() { super('c phone works'); }

  ngOnInit() {
  }

}
