import { Component } from '@angular/core';
export var HelloBoxComponent = (function () {
    function HelloBoxComponent() {
        this.title = 'app works!';
    }
    HelloBoxComponent.decorators = [
        { type: Component, args: [{
                    selector: 'hellobox',
                    templateUrl: './hellobox.component.html',
                    styleUrls: ['./hellobox.component.css']
                },] },
    ];
    /** @nocollapse */
    HelloBoxComponent.ctorParameters = function () { return []; };
    return HelloBoxComponent;
}());
//# sourceMappingURL=hellobox.component.js.map