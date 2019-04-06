import { Injectable } from '@angular/core';
import { Subject, range } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RandomService {

  private randomRange: Subject<{from: number, to: number}> = new Subject<{from: number, to: number}>();
  randomRange$ = this.randomRange.asObservable();

  randomData = [];

  constructor() { }

  generateRandomRange(from: number, to: number) {
    this.randomRange.next({
      'from': from,
      'to': Math.floor((Math.random() * to) + from)
    });
  }

  getRandomData() {
    return this.randomData;
  }

  setRandomData(from: number, to: number) {
    this.randomData = [];
    range(from, Math.floor((Math.random() * to) + from)).forEach(item => this.randomData.push(item));
    console.log('updated random data ' + this.randomData);
  }

}
