import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentBComponent } from './components/component-b/component-b.component';

const routes: Routes = [
  {path: '', component: ComponentBComponent}
];

const desktopModule: Routes = [

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SampleBRoutingModule { }
