import { Component, OnInit, OnChanges, SimpleChanges, AfterContentInit, DoCheck, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { range } from 'rxjs';
import { RandomService } from 'src/app/services/random.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnInit, OnChanges, AfterContentInit, DoCheck {

  items = [];

  constructor(private randomService: RandomService, private cdr: ChangeDetectorRef) {
      range(1, 10).forEach(item => this.items.push(item));
      randomService.randomRange$.subscribe(ran => {
        this.items = [];
        range(ran.from, ran.to).forEach(item => this.items.push(item));
      });
   }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngAfterContentInit(): void {
    console.log('view checked');
  }

  ngDoCheck(): void {
    console.log('child do check');
  }

  randomData() {
    return this.randomService.getRandomData();
  }

  detectChanges(){
    this.cdr.detectChanges();
  }

}
