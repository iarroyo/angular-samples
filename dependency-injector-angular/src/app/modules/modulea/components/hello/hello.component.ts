import { Component, OnInit } from '@angular/core';
import { MyserviceService } from 'src/app/services/myservice.service';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit {

  constructor(protected myservice: MyserviceService) {
    console.log('MyService >> ' + myservice.getGeneratedValue());
  }

  ngOnInit() {
  }

}
