import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelloComponent } from './modules/modulea/components/hello/hello.component';
import { HomeComponent } from './modules/modulea/components/home/home.component';

const routes: Routes = [
  { path: '', component: HelloComponent },
  { path: 'home', component: HomeComponent },
  { path: 'lazy', loadChildren: './modules/lazymodule/lazymodule.module#LazymoduleModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
