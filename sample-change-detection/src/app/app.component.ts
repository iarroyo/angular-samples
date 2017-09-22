import { ItemService } from './item.service';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Performance Improvement - Changes detection!';

  data = {'value': 'child'};

  subItemToChange: {'name': string, 'value': string} = {
    'name': 'item1.subItem1',
    'value': 'subItem1Changed'
  };


  constructor(private itemService: ItemService) {}

  changeSubItem() {
    this.itemService.subItemChanged.next(this.subItemToChange);
  }

  changeSubItemInItem() {
    this.itemService.changedSubItemInItem.next({
      'name': 'subItem1',
      'value': 'subItem1Changed'
    });
  }

  changeChild() {


    let data = {'value': 'child changed'};
    this.data = data;
    //this.itemService.changedData.next(data);
  }

}
