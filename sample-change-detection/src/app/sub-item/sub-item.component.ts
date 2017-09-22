import { SimpleChange } from '@angular/core/src/change_detection/change_detection_util';
import { ItemService } from '../item.service';
import { Component, DoCheck, Input, OnChanges, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, NgZone } from '@angular/core';

@Component({
  selector: 'app-sub-item',
  templateUrl: './sub-item.component.html',
  styleUrls: ['./sub-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubItemComponent implements OnInit {

  @Input() subItem: {value: string};
  @Input() parent: string;

  constructor(private itemService: ItemService, private changeDetectorRef: ChangeDetectorRef, private zone: NgZone) { }

  ngOnInit() {

    console.log('subItem');
/*
    this.zone.runOutsideAngular(() => {
      setTimeout(() => {
        this.subItem.value = 'changed';
      }, 3000);
    });

    setTimeout(() => {
      this.subItem = {'value': this.subItem.value + 'InZone'};
      this.changeDetectorRef.markForCheck();
    }, 4000);*/

    this.itemService.subItemChanged.subscribe(
      data => {
        if (this.parent + '.' + this.subItem.value === data.name) {
          this.subItem.value = data.value;
          this.changeDetectorRef.markForCheck();
          //this.changeDetectorRef.detectChanges();

        }
    });


  }

  ngOnChanges(simpleChange: SimpleChange) {
    console.log(simpleChange);
  }

  /*ngDoCheck() {
    console.log("changes checked");
  }*/
}
