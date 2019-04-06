import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelloWorldService } from './services/hello-world.service';
import { ModuleWithProviders } from '@angular/compiler/src/core';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class SharedModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [

      ]
    }
  }

}
