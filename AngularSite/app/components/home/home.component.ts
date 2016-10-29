import { Component } from '@angular/core';
import { PathUtility } from 'djayfresh/utility';

import { BaseComponent } from 'djayfresh/component/shared';

@Component({
    selector: 'home',
    templateUrl: PathUtility.componentTemplateURI('home'),
    styleUrls:  [PathUtility.componentStyleURI('home')]
})
export class HomeComponent extends BaseComponent { 
    constructor() {
        super();
    }
}
