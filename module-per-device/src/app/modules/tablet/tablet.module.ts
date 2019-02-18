import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ATabletComponent } from './components/a/a.component';
import { BTabletComponent } from './components/b/b.component';
import { CTabletComponent } from './components/c/c.component';
import { DTabletComponent } from './components/d/d.component';
import { ETabletComponent } from './components/e/e.component';

@NgModule({
  declarations: [
    ATabletComponent,
    BTabletComponent,
    CTabletComponent,
    DTabletComponent,
    ETabletComponent
  ],
  imports: [
    CommonModule
  ],
  entryComponents: [
    ATabletComponent,
    BTabletComponent,
    CTabletComponent,
    DTabletComponent,
    ETabletComponent
  ]
})
export class TabletModule { }
