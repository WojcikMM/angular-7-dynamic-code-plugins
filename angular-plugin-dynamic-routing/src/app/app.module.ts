import {BrowserModule} from '@angular/platform-browser';
import {Compiler, COMPILER_OPTIONS, CompilerFactory, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {JitCompilerFactory} from '@angular/platform-browser-dynamic';
import {MenuComponent} from './menu.component';
import {ClarityModule} from '@clr/angular';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterService} from './services/router.service';
import {ModuleService} from './services/module.service';
import {HttpClientModule} from '@angular/common/http';

export function createCompiler(compilerFactory: CompilerFactory) {
  return compilerFactory.createCompiler();
}

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    ClarityModule,
    RouterModule.forRoot([
      {
        path: '', redirectTo: 'menu', pathMatch: 'full'
      },
      {
        path: 'menu', component: MenuComponent
      },
    ], {useHash: true}),
  ],
  providers: [
    RouterService,
    ModuleService,
    {provide: COMPILER_OPTIONS, useValue: {}, multi: true},
    {provide: CompilerFactory, useClass: JitCompilerFactory, deps: [COMPILER_OPTIONS]},
    {provide: Compiler, useFactory: createCompiler, deps: [CompilerFactory]}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
