import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ADesktopComponent } from './components/a/a.component';
import { BDesktopComponent } from './components/b/b.component';
import { CDesktopComponent } from './components/c/c.component';
import { DDesktopComponent } from './components/d/d.component';
import { EDesktopComponent } from './components/e/e.component';
import { DesktopRoutingModule } from './desktop-routing.module';

@NgModule({
  declarations: [
    ADesktopComponent,
    BDesktopComponent,
    CDesktopComponent,
    DDesktopComponent,
    EDesktopComponent
  ],
  imports: [
    CommonModule,
    DesktopRoutingModule
  ],
  providers: [],
  exports: []
})
export class DesktopModule { }
