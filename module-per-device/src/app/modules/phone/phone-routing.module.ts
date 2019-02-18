import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { APhoneComponent } from './components/a/a.component';
import { BPhoneComponent } from './components/b/b.component';
import { CPhoneComponent } from './components/c/c.component';
import { DPhoneComponent } from './components/d/d.component';
import { EPhoneComponent } from './components/e/e.component';

const routes: Routes = [
  {path: 'a', component: APhoneComponent},
  {path: 'b', component: BPhoneComponent},
  {path: 'c', component: CPhoneComponent},
  {path: 'd', component: DPhoneComponent},
  {path: 'e', component: EPhoneComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhoneRoutingModule {}
