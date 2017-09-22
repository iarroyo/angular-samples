import { ItemService } from '../item.service';
import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnInit {

  @Input() data= { 'value' : 'child' };

  cmpName: string = "ChildComponent";

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.itemService.changedData.subscribe(data => {
      this.data = data;
    });
  }

}
