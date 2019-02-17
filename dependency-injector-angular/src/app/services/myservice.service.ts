import { Injectable } from '@angular/core';
import { UUID } from 'angular2-uuid';

export class MyserviceService {

  private generatedValue: string;
  constructor() {
    this.generatedValue = UUID.UUID();
    console.log('Generated value - ' + this.generatedValue);
  }

  public getGeneratedValue(): string { return this.generatedValue; }
}
