import { ItemService } from '../item.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() item: string;
  subItems: {value: string}[] = [{'value': 'subItem1'}, {'value': 'subItem2'}, {'value': 'subItem3'}];

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.itemService.changedSubItemInItem.subscribe(data => {
      this.subItemChanged(data);
    });
  }

  subItemChanged(data) {
    const index = this.subItems.findIndex(val => val.value === data.name);
    this.subItems.splice(index, 1, {'value' : data.value});
  }

}
