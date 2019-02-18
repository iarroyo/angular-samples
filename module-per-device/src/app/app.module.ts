import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { DesktopModule } from './modules/desktop/desktop.module';
//import { PhoneModule } from './modules/phone/phone.module';
//import { TabletModule } from './modules/tablet/tablet.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //DesktopModule,
    //PhoneModule,
    //TabletModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
