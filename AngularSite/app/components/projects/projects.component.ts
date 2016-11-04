import { Component } from '@angular/core';

import { BaseComponent } from 'djayfresh/component/shared';
import { PathUtility } from 'djayfresh/utility';
import { AppService } from 'djayfresh/services';

import { Project } from 'djayfresh/models';

@Component({
    selector: 'projects',
    templateUrl: PathUtility.componentTemplateURI('projects'),
    styleUrls: [PathUtility.componentStyleURI('projects')]
})
export class ProjectsComponent extends BaseComponent { 
    
    projects: Project[];

    constructor(appService: AppService){
        super(appService);
    }
}
