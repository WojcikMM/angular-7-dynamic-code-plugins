import { NgModule } from '@angular/core';
import { PluginBComponent } from './plugin-b.component';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [PluginBComponent],
  imports: [
    RouterModule.forChild([
      {
        path: '', pathMatch: 'full', component: PluginBComponent
      }
    ])
  ],
  exports: [PluginBComponent]
})
export class PluginBModule { }
