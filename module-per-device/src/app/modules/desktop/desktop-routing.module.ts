import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { ADesktopComponent } from './components/a/a.component';
import { BDesktopComponent } from './components/b/b.component';
import { CDesktopComponent } from './components/c/c.component';
import { DDesktopComponent } from './components/d/d.component';
import { EDesktopComponent } from './components/e/e.component';


const routes: Routes = [
  {path: 'a', component: ADesktopComponent},
  {path: 'b', component: BDesktopComponent},
  {path: 'c', component: CDesktopComponent},
  {path: 'd', component: DDesktopComponent},
  {path: 'e', component: EDesktopComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DesktopRoutingModule {}
