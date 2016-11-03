import { Component } from '@angular/core';
import { PathUtility } from 'djayfresh/utility';

import { BaseComponent } from 'djayfresh/component/shared';
import { AppService } from 'djayfresh/services';

@Component({
    selector: 'navigation',
    templateUrl: PathUtility.componentTemplateURI('navigation'),
    styleUrls:  [PathUtility.componentStyleURI('navigation')]
})
export class NavigationComponent extends BaseComponent { 
    constructor(appService: AppService){
        super(appService);
    }
}
