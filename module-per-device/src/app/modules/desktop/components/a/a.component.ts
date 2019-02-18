import { Component, OnInit } from '@angular/core';
import { AComponent } from 'src/app/logic/components/a/a.component';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.scss']
})
export class ADesktopComponent extends AComponent implements OnInit {

  constructor() {
    super('a works'); }

  ngOnInit() {
  }

}
