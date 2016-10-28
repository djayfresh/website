import { Component } from '@angular/core';

import { BaseComponent } from './shared/base.component';

@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
    styleUrls: ['./app/app.component.less']
})
export class AppComponent extends BaseComponent { 
    constructor(){
        super();
    }
}
