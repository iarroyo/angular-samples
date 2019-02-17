import { Component, OnInit } from '@angular/core';
import { MyserviceService } from 'src/app/services/myservice.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  protected value: string;

  constructor(protected myService: MyserviceService) {
    this.value = myService.getGeneratedValue();
  }

  ngOnInit() {
  }

}
