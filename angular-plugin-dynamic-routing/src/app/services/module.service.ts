import {Compiler, Injectable} from '@angular/core';
import {Observable, Subscriber, zip} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {System} from 'systemjs';
import {environment} from '../../environments/environment';
import {fromPromise} from 'rxjs/internal-compatibility';
import {flatMap} from 'rxjs/operators';
import {CompiledPluginModel, PluginConfigModel} from '../models';

// Needed for the new modules
import * as AngularCore from '@angular/core';
import * as AngularCommon from '@angular/common';
import * as AngularRouter from '@angular/router';
import * as AngularClarity from '@clr/angular';
import * as BrowserAnimations from '@angular/platform-browser/animations';

declare const SystemJS: System;


@Injectable()
export class ModuleService {

    constructor(private compiler: Compiler, private http: HttpClient) {
        SystemJS.set('@angular/core', SystemJS.newModule(AngularCore));
        SystemJS.set('@angular/common', SystemJS.newModule(AngularCommon));
        SystemJS.set('@angular/router', SystemJS.newModule(AngularRouter));
        SystemJS.set('@angular/platform-browser/animations', SystemJS.newModule(BrowserAnimations));
        SystemJS.set('@clr/angular', SystemJS.newModule(AngularClarity));
    }


    /**
     * Function that retrieves data from an external source about the external plugins needed to load.
     */
    getCompiledPlugins(): Observable<CompiledPluginModel[]> {
        return this.http.get<Array<PluginConfigModel>>(environment.plugin_config_url).pipe(
            flatMap(plugins => zip(...plugins.map(plugin => this._loadModuleSystemJS(plugin))))
        );
    }


    /**
     * Function that imports an external plugin and creates appropriate factories for it
     * @param moduleInfo information about the plugin to be imported
     */
    private _loadModuleSystemJS(moduleInfo: PluginConfigModel): Observable<CompiledPluginModel> {
        const url: string = environment.plugins_repository_url + moduleInfo.location;

        return new Observable<CompiledPluginModel>((subscriber: Subscriber<CompiledPluginModel>) => {
            fromPromise(SystemJS.import(url)).subscribe(module => {
                this.compiler.compileModuleAndAllComponentsSync(module[`${moduleInfo.moduleName}`]);
                subscriber.next({
                    pluginInfo: moduleInfo,
                    pluginModule: module
                });
                subscriber.complete();
            });
        });
    }
}


