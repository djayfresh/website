import { Component } from '@angular/core';
import { PathUtility } from 'djayfresh/utility';

import { BaseComponent } from 'djayfresh/component/shared';

@Component({
    selector: 'navigation',
    templateUrl: PathUtility.componentTemplateURI('navigation'),
    styleUrls:  [PathUtility.componentStyleURI('navigation')]
})
export class HomeComponent extends BaseComponent { 
    constructor() {
        super();
    }
}
