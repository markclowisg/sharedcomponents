(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('@angular/http')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/forms', '@angular/http'], factory) :
	(factory((global.ng = global.ng || {}, global.ng.shared = global.ng.shared || {}, global.ng.shared.components = global.ng.shared.components || {}),global.ng.core,global._angular_forms,global._angular_http));
}(this, (function (exports,_angular_core,_angular_forms,_angular_http) { 'use strict';

var HelloBoxComponent = (function () {
    function HelloBoxComponent() {
    }
    HelloBoxComponent.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'hellobox',
                    template: "\n    This was not too bad!! \n  ",
                    styles: []
                },] },
    ];
    /** @nocollapse */
    HelloBoxComponent.ctorParameters = function () { return []; };
    return HelloBoxComponent;
}());

var SharedComponentsModule = (function () {
    function SharedComponentsModule() {
    }
    SharedComponentsModule.decorators = [
        { type: _angular_core.NgModule, args: [{
                    declarations: [
                        HelloBoxComponent
                    ],
                    imports: [
                        _angular_forms.FormsModule,
                        _angular_http.HttpModule
                    ],
                    exports: [
                        HelloBoxComponent
                    ],
                    providers: []
                },] },
    ];
    /** @nocollapse */
    SharedComponentsModule.ctorParameters = function () { return []; };
    return SharedComponentsModule;
}());

exports.SharedComponentsModule = SharedComponentsModule;
exports.HelloBoxComponent = HelloBoxComponent;

Object.defineProperty(exports, '__esModule', { value: true });

})));
