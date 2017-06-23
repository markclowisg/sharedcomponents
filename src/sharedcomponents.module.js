import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HelloBoxComponent } from './hellobox/hellobox.component';
export var SharedComponentsModule = (function () {
    function SharedComponentsModule() {
    }
    SharedComponentsModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        HelloBoxComponent
                    ],
                    imports: [
                        FormsModule,
                        HttpModule
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
//# sourceMappingURL=sharedcomponents.module.js.map