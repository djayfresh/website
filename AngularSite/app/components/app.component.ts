import { Component } from '@angular/core';

import { BaseComponent } from 'djayfresh/component/shared';
import { PathUtility } from 'djayfresh/utility';

@Component({
    selector: 'my-app',
    templateUrl: PathUtility.componentURI('app.component.html'),
    styleUrls: [PathUtility.componentURI('app.component.less')]
})
export class AppComponent extends BaseComponent { 
    constructor(){
        super();
    }
}
