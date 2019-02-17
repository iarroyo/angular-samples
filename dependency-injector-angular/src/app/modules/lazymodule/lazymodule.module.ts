import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazycomponentComponent } from './components/lazycomponent/lazycomponent.component';
import { RouterModule, Routes } from '@angular/router';
import { MyserviceService } from 'src/app/services/myservice.service';

const routes: Routes = [
  { path: '', component: LazycomponentComponent }
];

@NgModule({
  declarations: [LazycomponentComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [MyserviceService]
})
export class LazymoduleModule { }
