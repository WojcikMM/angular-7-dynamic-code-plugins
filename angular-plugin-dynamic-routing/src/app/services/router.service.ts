import {Router, Route} from '@angular/router';
import {Injectable} from '@angular/core';
import {CompiledPluginModel} from '../models';

@Injectable()
export class RouterService {

    constructor(private router: Router) {
    }

    createAndRegisterRoute(compiledPluginModel: CompiledPluginModel) {
        const {
            pluginInfo: {
                path: pluginPath,
                moduleName: pluginModuleName
            },
            pluginModule: module
        } = compiledPluginModel;

        const currentRouterConfig = [
            ...this.router.config.filter(routeConfig => routeConfig.path !== pluginPath),
            {
                path: pluginPath,
                loadChildren: () => module[`${pluginModuleName}`]
            } as Route];

        this.router.resetConfig(currentRouterConfig);
        console.log(`Route: ${pluginPath} was successfully added to router configuration.`);
    }
}
