import { Component } from '@angular/core';
import { HelloWorldService } from './modules/shared/services/hello-world.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'modules-understanding-providers';

  constructor(helloWorldService: HelloWorldService) {
    console.log('Hello');
  }
}
