import { Component } from '@angular/core';

import { BaseComponent } from './shared/base-component.component';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.less']
})
export class AppComponent extends BaseComponent { 
    constructor(){
        super();
    }
}
