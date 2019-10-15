import { NgModule } from '@angular/core';
import { PluginAComponent } from './plugin-a.component';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [PluginAComponent],
  imports: [
    RouterModule.forChild([
      {
        path: '', pathMatch: 'full', component: PluginAComponent
      }
    ])
  ],
  exports: [PluginAComponent]
})
export class PluginAModule { }
