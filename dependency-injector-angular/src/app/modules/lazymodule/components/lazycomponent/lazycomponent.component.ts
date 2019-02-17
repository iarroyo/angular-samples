import { Component, OnInit } from '@angular/core';
import { MyserviceService } from 'src/app/services/myservice.service';

@Component({
  selector: 'app-lazycomponent',
  templateUrl: './lazycomponent.component.html',
  styleUrls: ['./lazycomponent.component.scss']
})
export class LazycomponentComponent implements OnInit {

  constructor(protected myservice: MyserviceService) {
    console.log('MyService >> ' + myservice.getGeneratedValue());
  }

  ngOnInit() {
  }

}
