import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router, PreloadAllModules } from '@angular/router';
import { DeviceDetectorService } from './services/device-detector.service';
/*
import { ADesktopComponent } from './modules/desktop/components/a/a.component';
import { BDesktopComponent } from './modules/desktop/components/b/b.component';
import { CDesktopComponent } from './modules/desktop/components/c/c.component';
import { DDesktopComponent } from './modules/desktop/components/d/d.component';
import { EDesktopComponent } from './modules/desktop/components/e/e.component';
import { APhoneComponent } from './modules/phone/components/a/a.component';
import { BPhoneComponent } from './modules/phone/components/b/b.component';
import { CPhoneComponent } from './modules/phone/components/c/c.component';
import { DPhoneComponent } from './modules/phone/components/d/d.component';
import { EPhoneComponent } from './modules/phone/components/e/e.component';
import { ATabletComponent } from './modules/tablet/components/a/a.component';
import { BTabletComponent } from './modules/tablet/components/b/b.component';
import { CTabletComponent } from './modules/tablet/components/c/c.component';
import { DTabletComponent } from './modules/tablet/components/d/d.component';
import { ETabletComponent } from './modules/tablet/components/e/e.component';*/

const desktopModule: Routes = [
  { path: '', loadChildren: './modules/desktop/desktop.module#DesktopModule' }
];
const tabletModule: Routes = [
  { path: '', loadChildren: './modules/tablet/tablet.module#TabletModule' }
];
const phoneModule: Routes = [
  { path: '', loadChildren: './modules/phone/phone.module#PhoneModule' }
];

/*const desktopModule: Routes =
[
  {path: 'a', component: ADesktopComponent},
  {path: 'b', component: BDesktopComponent},
  {path: 'c', component: CDesktopComponent},
  {path: 'd', component: DDesktopComponent},
  {path: 'e', component: EDesktopComponent}
];

const tabletModule: Routes =
[
  {path: 'a', component: ATabletComponent},
  {path: 'b', component: BTabletComponent},
  {path: 'c', component: CTabletComponent},
  {path: 'd', component: DTabletComponent},
  {path: 'e', component: ETabletComponent}
];

const phoneModule: Routes =
[
  {path: 'a', component: APhoneComponent},
  {path: 'b', component: BPhoneComponent},
  {path: 'c', component: CPhoneComponent},
  {path: 'd', component: DPhoneComponent},
  {path: 'e', component: EPhoneComponent}
];*/

@NgModule({
  imports: [RouterModule.forRoot(desktopModule)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  constructor(protected router: Router, protected deviceDetectorService: DeviceDetectorService) {
    if (deviceDetectorService.isPhoneResolution()) {
      router.resetConfig(phoneModule);
    } else if (deviceDetectorService.isTabletResolution()) {
        router.resetConfig(tabletModule);
    }
  }
}
