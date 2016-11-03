import { Component } from '@angular/core';
import { PathUtility } from 'djayfresh/utility';

import { BaseComponent } from 'djayfresh/component/shared';
import { AppService } from 'djayfresh/services';

@Component({
    selector: 'home',
    templateUrl: PathUtility.componentTemplateURI('home'),
    styleUrls:  [PathUtility.componentStyleURI('home')]
})
export class HomeComponent extends BaseComponent { 
    constructor(appService: AppService){
        super(appService);
    }
}
