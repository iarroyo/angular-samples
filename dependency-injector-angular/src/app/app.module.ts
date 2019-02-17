import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModuleAModule } from './modules/modulea/modulea.module';
import { SampleComponent } from './components/sample/sample.component';
import { TestComponent } from './components/test/test.component';
import { MyserviceService } from './services/myservice.service';

@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModuleAModule
  ],
  providers: [
    MyserviceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
