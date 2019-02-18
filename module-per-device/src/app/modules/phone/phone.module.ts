import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { APhoneComponent } from './components/a/a.component';
import { CPhoneComponent } from './components/c/c.component';
import { BPhoneComponent } from './components/b/b.component';
import { DPhoneComponent } from './components/d/d.component';
import { EPhoneComponent } from './components/e/e.component';

@NgModule({
  declarations: [
    APhoneComponent,
    BPhoneComponent,
    CPhoneComponent,
    DPhoneComponent,
    EPhoneComponent
  ],
  imports: [
    CommonModule
  ],
  entryComponents: [
    APhoneComponent,
    BPhoneComponent,
    CPhoneComponent,
    DPhoneComponent,
    EPhoneComponent
  ]
})
export class PhoneModule { }
