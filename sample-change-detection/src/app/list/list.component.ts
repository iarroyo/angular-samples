import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  items: string[]= ['item1', 'item2', 'item3'];

  constructor() {}

  ngOnInit() {

  }

}
