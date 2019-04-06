import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SampleBRoutingModule } from './sample-b-routing.module';
import { ComponentBComponent } from './components/component-b/component-b.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ComponentBComponent],
  imports: [
    CommonModule,
    SampleBRoutingModule,
    SharedModule
  ]
})
export class SampleBModule { }
