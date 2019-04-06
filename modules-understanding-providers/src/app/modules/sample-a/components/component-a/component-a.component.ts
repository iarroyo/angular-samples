import { Component, OnInit } from '@angular/core';
import { HelloWorldService } from 'src/app/modules/shared/services/hello-world.service';

@Component({
  selector: 'app-component-a',
  templateUrl: './component-a.component.html',
  styleUrls: ['./component-a.component.scss']
})
export class ComponentAComponent implements OnInit {

  constructor(helloWorldService: HelloWorldService) {
    helloWorldService.sayHello();
  }

  ngOnInit() {
  }

}
