(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/router')) :
    typeof define === 'function' && define.amd ? define('plugin-b', ['exports', '@angular/core', '@angular/router'], factory) :
    (global = global || self, factory(global['plugin-b'] = {}, global.ng.core, global.ng.router));
}(this, function (exports, core, router) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PluginBService = /** @class */ (function () {
        function PluginBService() {
        }
        PluginBService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        PluginBService.ctorParameters = function () { return []; };
        /** @nocollapse */ PluginBService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function PluginBService_Factory() { return new PluginBService(); }, token: PluginBService, providedIn: "root" });
        return PluginBService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PluginBComponent = /** @class */ (function () {
        function PluginBComponent() {
        }
        /**
         * @return {?}
         */
        PluginBComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        PluginBComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'lib-plugin-b',
                        template: "\n    <p>\n      plugin-b works!\n    </p>\n  "
                    }] }
        ];
        /** @nocollapse */
        PluginBComponent.ctorParameters = function () { return []; };
        return PluginBComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PluginBModule = /** @class */ (function () {
        function PluginBModule() {
        }
        PluginBModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [PluginBComponent],
                        imports: [
                            router.RouterModule.forChild([
                                {
                                    path: '', pathMatch: 'full', component: PluginBComponent
                                }
                            ])
                        ],
                        exports: [PluginBComponent]
                    },] }
        ];
        return PluginBModule;
    }());

    exports.PluginBComponent = PluginBComponent;
    exports.PluginBModule = PluginBModule;
    exports.PluginBService = PluginBService;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=plugin-b.umd.js.map
