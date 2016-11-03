import { Component } from '@angular/core';

import { BaseComponent } from 'djayfresh/component/shared';
import { PathUtility } from 'djayfresh/utility';
import { AppService } from 'djayfresh/services';

@Component({
    selector: 'projects',
    templateUrl: PathUtility.componentTemplateURI('projects'),
    styleUrls: [PathUtility.componentStyleURI('projects')]
})
export class ProjectsComponent extends BaseComponent { 
    constructor(appService: AppService){
        super(appService);
    }
}
