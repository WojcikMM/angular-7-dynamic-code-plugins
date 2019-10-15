export interface CompiledPluginModel {
    pluginInfo: PluginConfigModel;
    pluginModule: any;
}

export interface PluginConfigModel {
    path: string;
    location: string;
    moduleName: string;
    description: string;
}
