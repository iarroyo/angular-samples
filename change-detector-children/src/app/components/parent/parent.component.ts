import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { RandomService } from 'src/app/services/random.service';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  text: string;
  @ViewChild('child') childComponent: ChildComponent;

  constructor(private route: ActivatedRoute, private randomService: RandomService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.text = params['text'];
      this.randomService.setRandomData(1, 10);
      this.childComponent.detectChanges();
    });
  }

  updateChild() {
    this.randomService.generateRandomRange(1, 10);
  }

}
