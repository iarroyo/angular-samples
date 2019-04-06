import { Component, OnInit } from '@angular/core';
import { HelloWorldService } from 'src/app/modules/shared/services/hello-world.service';

@Component({
  selector: 'app-component-b',
  templateUrl: './component-b.component.html',
  styleUrls: ['./component-b.component.scss']
})
export class ComponentBComponent implements OnInit {

  constructor(helloWorldService: HelloWorldService) {
    helloWorldService.sayHello();
  }

  ngOnInit() {
  }

}
