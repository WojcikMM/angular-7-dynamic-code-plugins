(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/router')) :
    typeof define === 'function' && define.amd ? define('plugin-a', ['exports', '@angular/core', '@angular/router'], factory) :
    (global = global || self, factory(global['plugin-a'] = {}, global.ng.core, global.ng.router));
}(this, function (exports, core, router) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PluginAComponent = /** @class */ (function () {
        function PluginAComponent() {
        }
        /**
         * @return {?}
         */
        PluginAComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        PluginAComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'lib-plugin-a',
                        template: "<img src=\"http://icons.iconarchive.com/icons/papirus-team/papirus-apps/256/preferences-plugin-icon.png\">\r\n"
                    }] }
        ];
        /** @nocollapse */
        PluginAComponent.ctorParameters = function () { return []; };
        return PluginAComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PluginAModule = /** @class */ (function () {
        function PluginAModule() {
        }
        PluginAModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [PluginAComponent],
                        imports: [
                            router.RouterModule.forChild([
                                {
                                    path: '', pathMatch: 'full', component: PluginAComponent
                                }
                            ])
                        ],
                        exports: [PluginAComponent]
                    },] }
        ];
        return PluginAModule;
    }());

    exports.PluginAComponent = PluginAComponent;
    exports.PluginAModule = PluginAModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=plugin-a.umd.js.map
