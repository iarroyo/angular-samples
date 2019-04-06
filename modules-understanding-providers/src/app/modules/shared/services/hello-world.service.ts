import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelloWorldService {

  constructor() {
    console.log('I am being constructed');
  }

  sayHello() {
    console.log('Hello');
  }
}
