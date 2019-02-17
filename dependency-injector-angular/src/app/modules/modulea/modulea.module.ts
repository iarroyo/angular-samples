import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelloComponent } from './components/hello/hello.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [HelloComponent, HomeComponent],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent
  ]
})
export class ModuleAModule { }
