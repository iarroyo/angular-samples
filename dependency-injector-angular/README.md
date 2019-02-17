# DependencyInjectorAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## Dependency Injection (https://angular.io/guide/hierarchical-dependency-injection)

- All Providers of Eager Modules are merged into one - root injector
- Lazy Modules have its own injector (exist hierarchy)
  - Check any provider locally (own injector) if it is not found check it in the root injector
  - A new instance is created for any provider in the LazyModule
  - In order to share a lazy load service with the rest of the modules you need to register it as part of the root injector (forRoot). Other way around is to get it from the child injector once the lazy module is loaded (or if it is a component you need to create it dynamically)
