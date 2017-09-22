import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Rx';

@Injectable()
export class ItemService {

  subItemChanged: Subject<{name: string, value: string}> = new Subject<{name: string, value: string}>();

  changedSubItemInItem: Subject<{name: string, value: string}> = new Subject<{name: string, value: string}>();

  changedData: Subject<any> = new Subject<any>();

  changeDetected: Subject<void> = new Subject<void>();

  constructor() { }

}
