import {Component, OnInit} from '@angular/core';
import {RouterService} from './services/router.service';
import {ModuleService} from './services/module.service';
import {CompiledPluginModel, PluginConfigModel} from './models';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
    loadedPluginsArray: PluginConfigModel[] = [];

    constructor(private routerService: RouterService, private moduleService: ModuleService) {
    }

    ngOnInit() {
        this.moduleService.getCompiledPlugins()
            .subscribe((compiledPluginsModels: CompiledPluginModel[]) => {
                compiledPluginsModels.forEach((compiledPluginModel: CompiledPluginModel) => {
                    this.routerService.createAndRegisterRoute(compiledPluginModel);
                    this.loadedPluginsArray.push(compiledPluginModel.pluginInfo);
                });
            });
    }
}
