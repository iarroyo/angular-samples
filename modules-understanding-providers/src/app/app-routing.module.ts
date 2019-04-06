import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentAComponent } from './modules/sample-a/components/component-a/component-a.component';

const routes: Routes = [
  {path: 'a', component: ComponentAComponent},
  { path: 'b', loadChildren: './modules/sample-b/sample-b.module#SampleBModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
