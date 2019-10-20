import {Component, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {ModuleService} from './services/module.service';

@Component({
    selector: 'app-menu',
    template: `<p>menu works!</p>
    <div #pluginInjector></div>`
})
export class MenuComponent implements OnInit {
    @ViewChild('pluginInjector', {read: ViewContainerRef, static: false}) pluginInjector: ViewContainerRef;
    constructor(private _moduleService: ModuleService) {
    }

    ngOnInit(): void {
        this._moduleService.getCompiledPluginToInject('plugin-a').subscribe(pluginFactory => {
           this.pluginInjector.createComponent(pluginFactory);
        });
    }


}
