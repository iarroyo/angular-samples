import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { ATabletComponent } from './components/a/a.component';
import { BTabletComponent } from './components/b/b.component';
import { CTabletComponent } from './components/c/c.component';
import { DTabletComponent } from './components/d/d.component';
import { ETabletComponent } from './components/e/e.component';

const routes: Routes = [
  {path: 'a', component: ATabletComponent},
  {path: 'b', component: BTabletComponent},
  {path: 'c', component: CTabletComponent},
  {path: 'd', component: DTabletComponent},
  {path: 'e', component: ETabletComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhoneRoutingModule {}
